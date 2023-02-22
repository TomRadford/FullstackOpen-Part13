import dotEnv from 'dotenv'
dotEnv.config()
import { Sequelize, Model,  DataTypes, CreationOptional} from 'sequelize'
import express, {request} from 'express'
