import { WorkoutsIndex } from "./WorkoutsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { WorkoutsShow } from "./WorkoutsShow";
import Form from "react-bootstrap/Form";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Pricing } from "./Pricing";
import { YourAccount } from "./YourAccount";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<WorkoutsIndex />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/youraccount" element={<YourAccount />} />
      </Routes>
      {/* <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} /> */}
    </div>
  );
}
