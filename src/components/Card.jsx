import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

// ==================== CARD COMPONENT ====================
const Card = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-300/20 p-8 md:p-10">
          <div className="text-center mb-10">
            <div className="mb-4">
              <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">A</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
            <p className="text-slate-500 mt-2">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card