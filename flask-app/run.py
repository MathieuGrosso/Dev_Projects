#! /usr/bin/env python
from fbapp import app
from fbapp.models import db


if __name__ == "__main__":
    app.run(debug=True)
