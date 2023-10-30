import React, { useState } from "react";
import {MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn} from "mdb-react-ui-kit";
import HolyMass from "./HolyMass";
import Sacramentals from "./Sacramentals";
import OfficeHours from "./OfficeHours";

export default function NavForMasses() {
  const [activeTab, setActiveTab] = useState("mass");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "mass":
        return <HolyMass />;
      case "sacramentals":
        return <Sacramentals />;
      case "office":
        return <OfficeHours />;
      default:
        return null;
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4">
          <MDBListGroup className="list-group-light" id="list-tab" role="tablist">
            <MDBBtn style={{background: 'transparent'}}><MDBListGroupItem
              className={`list-group-item list-group-item-action px-3 border-0 bg-transparent ${
                activeTab === "mass" ? "active" : ""
              }`}
              onClick={() => handleTabClick("mass")}
            >
              Porządek Mszy Świętej
            </MDBListGroupItem></MDBBtn>
            <MDBBtn className={'my-1'} style={{background: 'transparent'}}><MDBListGroupItem
              className={`list-group-item list-group-item-action px-3 border-0 bg-transparent ${
                activeTab === "sacramentals" ? "active" : ""
              }`}
              onClick={() => handleTabClick("sacramentals")}
            >
              Sakramenty i Nabożeństwa
            </MDBListGroupItem></MDBBtn>
            <MDBBtn style={{background: 'transparent'}}><MDBListGroupItem
              className={`list-group-item list-group-item-action px-3 border-0 bg-transparent ${
                activeTab === "office" ? "active" : ""
              }`}
              onClick={() => handleTabClick("office")}
            >
              Godziny Otwarcia Kancelarii
            </MDBListGroupItem></MDBBtn>
          </MDBListGroup>
        </MDBCol>
        <MDBCol size="8">
          {renderTabContent()}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
