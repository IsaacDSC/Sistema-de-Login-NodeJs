const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

require('../models/Post')