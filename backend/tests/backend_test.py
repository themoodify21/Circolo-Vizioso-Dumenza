"""Backend API tests for Circolo Vizioso app."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://alpine-heritage-1.preview.emergentagent.com').rstrip('/')

# Read from frontend .env if available
try:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
except Exception:
    pass


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root_hello(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


def test_create_reservation_and_list(api):
    payload = {
        "name": "TEST_Mario",
        "guests": 4,
        "date": "2026-02-14",
        "time": "20:00",
        "note": "Tavolo vicino al camino",
        "message": "Prenotazione test"
    }
    r = api.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert data["name"] == payload["name"]
    assert data["guests"] == 4
    assert data["date"] == payload["date"]
    assert data["time"] == payload["time"]
    assert data["note"] == payload["note"]

    created_id = data["id"]

    r2 = api.get(f"{BASE_URL}/api/reservations")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    ids = [it["id"] for it in items]
    assert created_id in ids, "Created reservation not found in GET list"


def test_reservation_minimal_payload(api):
    # only name provided; other fields should default
    r = api.post(f"{BASE_URL}/api/reservations", json={"name": "TEST_Minimal"})
    assert r.status_code in (200, 201)
    d = r.json()
    assert d["name"] == "TEST_Minimal"
    assert d["guests"] == 0
