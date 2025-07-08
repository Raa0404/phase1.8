
import React from "react";

const Button = ({ children, onClick, variant }) => {
  const base = "px-4 py-2 rounded font-medium";
  const outline = "border border-orange-500 text-orange-600 bg-white hover:bg-orange-100";
  const solid = "text-white bg-orange-500 hover:bg-orange-600";
  return (
    <button onClick={onClick} className={variant === "outline" ? base + " " + outline : base + " " + solid}>
      {children}
    </button>
  );
};

export default function Phase3({ data, onBack }) {
  if (!data || data.length === 0) return <div className="p-4">No data found.</div>;

  const cifId = data[0]["CIF ID"];
  const noOfAccounts = data[0]["Number of Accounts"];
  const npaCategory = data[0]["NPA Category"];

  return (
    <div className="p-4 bg-orange-100 min-h-screen">
      <div className="text-right text-sm font-semibold text-red-600">© P.Raa</div>
      <h2 className="text-xl font-bold text-orange-700 mb-4">Phase 3: Account Settlement Details</h2>
      <div className="mb-4 p-3 bg-orange-200 rounded shadow">
        <p className="font-semibold">CIF ID: <span className="font-normal">{cifId}</span></p>
        <p className="font-semibold">Number of Accounts: <span className="font-normal">{noOfAccounts}</span></p>
        <p className="font-semibold">NPA Category: <span className="font-normal">{npaCategory}</span></p>
      </div>
      <div className="space-y-2">
        {data.map((acc, idx) => (
          <div key={idx} className="bg-white rounded p-3 shadow text-sm">
            <p>
              <strong>{acc["Account Number"]}</strong> | {acc["Borrower Name"]} | {acc["NPA Date"]} | ₹{acc["CIF Outstanding"]} O/S | ₹{acc["Principal O/S"]} Principal | ₹{acc["Minimum Settlement"]} Min Settlement | ₹{acc["Sacrifice"]} Sacrifice
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button>Finish</Button>
      </div>
    </div>
  );
}
