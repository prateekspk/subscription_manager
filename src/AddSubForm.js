import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ColourPicker from "./ColourPicker";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import SubDisplayCard from "./SubDisplayCard";
import "./AddSubForm.css";

export default function AddSubForm({ handleSubListChange }) {
  const [subscription, setSubscription] = useState({
    id: "",
    subAmount: 120,
    subName: "Netflix",
    subDesc: "To watch Movies",
    recurring: true,
    billingPeriodDate: 1,
    billingPeriodFrequency: "Month",
    firstPaymentDate: null,
    colour: "#ffffff",
    dailyFees: 0,
    monthlyFees: 0,
    weeklyFees: 0,
    yearlyFees: 0,
  });

  const setSubColour = (colour) => {
    setSubscription({
      ...subscription,
      colour: colour,
    });
    setShowColourpickModal(false);
  };

  const [showColourpickModal, setShowColourpickModal] = useState(false);
  const handleSubmit = () => {
    handleSubListChange(
      calculateAllFrequencyFees(
        parseFloat(subscription.subAmount),
        subscription.billingPeriodFrequency
      )
    );
  };

  const calculateAllFrequencyFees = (amount, frequency) => {
    var dailyFees = 0,
      monthlyFees = 0,
      weeklyFees = 0,
      yearlyFees = 0;

    switch (frequency) {
      case "Day":
        dailyFees = amount;
        weeklyFees = amount * 7;
        monthlyFees = (amount * 365) / 12;
        yearlyFees = amount * 365;

        break;
      case "Week":
        dailyFees = amount / 7;
        weeklyFees = amount;
        monthlyFees = (amount * 54) / 12;
        yearlyFees = amount * 54;
        break;
      case "Month":
        dailyFees = (amount * 12) / 365;
        weeklyFees = (amount * 12) / 52;
        monthlyFees = amount;
        yearlyFees = amount * 12;

        break;
      case "Year":
        dailyFees = amount / 365;
        weeklyFees = amount / 52;
        monthlyFees = amount / 12;
        yearlyFees = amount;
        break;
    }

    const newObj = {
      ...subscription,
      id: uuidv4(),
      dailyFees: Math.round(dailyFees),
      monthlyFees: Math.round(monthlyFees),
      weeklyFees: Math.round(weeklyFees),
      yearlyFees: Math.round(yearlyFees),
    };

    // alert(JSON.stringify(newObj));
    return newObj;

    //         [dailyFees]:dailyFees,[monthlyFees]:{monthlyFees},[weeklyFees]:{weeklyFees},[yearlyFees]:{yearlyFees}
  };

  return (
    <>
      <div className="modalHeader">
        <h3>Add New Subscription</h3>
      </div>

     
        <SubDisplayCard
          isSubForm={true}
          sub={subscription}
          selectedFrequency={subscription.billingPeriodFrequency}
        />
        <form>
        <div className="formGrid">
         
          <div className="inputFormField grid-span-2">
            <label>Subscription Charge</label>
            <TextField
              type="number"
              id="subAmount"
              name="subAmount"
              placeholder="Subscription Charge"
              value={subscription.subAmount}
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            />
            </div>
            <div className="inputFormField grid-span-2">
            <label>Name</label>
            <TextField
              type="text"
              id="subName"
              name="subName"
              placeholder="Subscription Name"
              value={subscription.subName}
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            />
            </div>
              <div className="inputFormField grid-span-3">
            <label>Description (Optional) </label>
            <TextField
              type="text"
              id="subDesc"
              name="subDesc"
              placeholder="Description"
              value={subscription.subDesc}
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            />
            </div>
              <div className="inputFormField">
            <label>Recurring Expense?</label>
            <Checkbox
              name="recurring"
              checked={subscription.recurring}
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            /></div>
              <div className="inputFormField rid-span-2">
            <label>Billing Period</label>
            <div className="rowFlex">
            <TextField
              type="number"
              id="billingPeriodDate"
              name="billingPeriodDate"
              placeholder="1"
              value={subscription.billingPeriodDate}
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            />

            <Select
              value={subscription.billingPeriodFrequency}
              name="billingPeriodFrequency"
              id="billingPeriodFrequency"
              onChange={(e) =>
                setSubscription({
                  ...subscription,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <MenuItem value="Month">Month</MenuItem>
              <MenuItem value="Day">Day</MenuItem>
              <MenuItem value="Week">MonWeekth</MenuItem>
              <MenuItem value="Year">Year</MenuItem>
            </Select>
            </div>
            </div>
            <div className="inputFormField rid-span-2">
              
            <label>First Payment Date</label>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                name="firstPaymentDate"
                id="firstPaymentDate"
                label="Eg . Today?"
                value={subscription.firstPaymentDate}
                onChange={(newValue) => {
                  setSubscription({
                    ...subscription,
                    firstPaymentDate: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </div>
            <div className="inputFormField">
            <label>Selected Colour </label>
            {subscription.colour ? (
              <button
                style={{
                  backgroundColor: subscription.colour,
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                }}
              ></button>
            ) : (
              <span>None</span>
            )}
            </div>
            <Button
            id="colourpickerbutton"
              variant="outlined"
              onClick={() => setShowColourpickModal(true)}
            >
              Pick Colour
            </Button>
            <Modal show={showColourpickModal} setShow={setShowColourpickModal}>
              <ColourPicker setSubColour={setSubColour} />{" "}
            </Modal>
           

            <Button id="saveSubscription" variant="outlined" onClick={handleSubmit}>
              Save Subscription
            </Button>
          </div>
         
        </form>
     
     
    </>
  );
}
