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


module.exports = {
    //server
    server: {
        host: '127.0.0.1',
        port: '3000',
    },
    //content delivery network hosting
    cdn: {
        url: 'http://192.168.1.15/upload/images/',
        agp: 'agp/',
    },
    //upload directory
    upload: {
        path: 'public/upload/images/',
        default_image: 'upload/images/default_no_image.png',
        agp: {
            destination: 'agp/',
            prefix: "agp"
        },
    }
};