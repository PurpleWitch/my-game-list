from flask import Flask, render_template, url_for, request, session, redirect, jsonify, Response
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_cors import CORS, cross_origin
from bson.objectid import ObjectId
from bson import json_util
from os import environ
import datetime
import bcrypt
import json
import os
