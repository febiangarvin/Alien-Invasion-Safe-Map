import React, { useState } from "react";

import { MapContent } from './mapContent.js'

import 'semantic-ui-css/semantic.min.css'

import "../../css/map/mainMap.css";

function MainMap() {
    return (
        <div>
            {MapContent()}
        </div>
    )
}

export default MainMap