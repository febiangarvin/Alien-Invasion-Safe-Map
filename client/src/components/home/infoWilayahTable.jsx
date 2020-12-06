import React, { Fragment } from "react";
import "../../css/home/infoWilayahTable.css"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Social from './social'

// // ----- TABLE WILAYAH COMPONENTS ----- // //
import TableWilayahBahaya from './tableWilayahBahaya'
import TableWilayahSiaga from './tableWilayahSiaga'
import TableWilayahWaspada from './tableWilayahWaspada'

const InfoWilayahTable = () => {
    return (
        <Fragment>
            <div className="row bg-light mr-0">
                <div className="col-8">
                    <Tabs>
                        {/* // // ----- TAB LIST ----- // // */}
                        <TabList>
                            <Tab style={{ fontSize: 17, fontWeight: 700 }}>High Risk Areas</Tab>
                            <Tab style={{ fontSize: 17, fontWeight: 700 }}>Medium Risk Areas</Tab>
                            <Tab style={{ fontSize: 17, fontWeight: 700 }}>Low Risk Areas</Tab>
                        </TabList>

                        {/* // // ----- TAB PANEL ----- // // */}
                        <TabPanel>
                            <div className="bahayaTable">
                                <TableWilayahBahaya />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="siagaTable">
                                <TableWilayahSiaga />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="waspadaTable">
                                <TableWilayahWaspada />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

                <div className="col-4">
                    <Social />
                </div>
            </div>
        </Fragment>
    )
}

export default InfoWilayahTable