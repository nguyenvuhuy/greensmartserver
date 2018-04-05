/**
 * @Project GreenSmart
 * @Copyright (c) 2018 by G0714CLC. All Rights Reserved.
 * @Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
const notificationModel = require(
  '../../models/notificationsModel')

module.exports.listNotifications = (req, res, next) => {
  notificationModel.listNotifications().then((result) => {
    res.json(result)
  }).catch((error) => {
    res.json(error)
  })
}

module.exports.getNotification = (req, res) => {
  let _id = req.params.id
  notificationModel.getNotification(_id).then((result) => {
    res.json(result)
  }).catch((error) => {
    res.json(error)
  })
}

module.exports.create = (data) => {
  notificationModel.createNotification(data)
}


