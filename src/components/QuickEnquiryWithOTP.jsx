// src/components/QuickEnquiryWithOTP.jsx
import React, { useState, useRef } from "react";

export default function QuickEnquiryWithOTP({ onSuccess }) {
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");
  const [position, setPosition] = useState("");
  const [domain, setDomain] = useState("Web Development");

  // OTP flow
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");

  // Submission success
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRef = useRef(null);

  // Send OTP
  async function sendOtp() {
    if (!/^\d{10}$/.test(phone)) {
      setOtpMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    setOtpMessage("Sending OTP...");
    try {
      const resp = await fetch("http://localhost:5000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        setOtpSent(true);
        setOtpMessage("OTP sent. Check your phone.");
      } else {
        setOtpMessage((data && data.message) || "Failed to send OTP");
      }
    } catch (err) {
      console.error("sendOtp err", err);
      setOtpMessage("Network error while sending OTP");
    }
  }

  // Verify OTP
  async function verifyOtp() {
    if (!otpValue) {
      setOtpMessage("Enter the OTP received.");
      return;
    }
    setOtpMessage("Verifying OTP...");
    try {
      const resp = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp: otpValue }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        setOtpVerified(true);
        setOtpMessage("Phone number verified ✅");
      } else {
        setOtpVerified(false);
        setOtpMessage((data && data.message) || "OTP verification failed");
      }
    } catch (err) {
      console.error("verifyOtp err", err);
      setOtpMessage("Network error while verifying OTP");
    }
  }

  // Final submit (register)
  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !/^\d{10}$/.test(phone) || !degree.trim() || !position.trim()) {
      alert("Please fill all required fields correctly.");
      return;
    }
    if (!otpVerified) {
      alert("Please verify your phone number first using OTP.");
      return;
    }

    setIsSubmitting(true);
    try {
      const resp = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, degree, position, domain }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        setIsSuccessOpen(true);
        // optionally clear fields
        setName("");
        setEmail("");
        setPhone("");
        setDegree("");
        setPosition("");
        setDomain("Web Development");
        setOtpSent(false);
        setOtpVerified(false);
        setOtpValue("");
        setOtpMessage("");
        if (typeof onSuccess === "function") onSuccess();
      } else {
        alert((data && data.message) || "Registration failed");
      }
    } catch (err) {
      console.error("register err", err);
      alert("Network error during registration");
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Modal UI (non-closable via backdrop or X) ---
  return (
    <>
      {/* Backdrop fixed */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* dark backdrop (click won't close) */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Modal container */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-[95%] max-w-2xl p-6 z-60"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-semibold mb-3">Free Job Portal - Student Registration</h2>
          <p className="text-sm text-gray-600 mb-4">
            Fill the details below to get access. (Modal intentionally has no direct close button.)
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student name*"
                className="p-2 border rounded"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                type="email"
                className="p-2 border rounded"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
              <div className="flex gap-2">
                <input
                  ref={phoneRef}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/[^0-9]/g, ""));
                    setOtpMessage("");
                    setOtpSent(false);
                    setOtpVerified(false);
                  }}
                  placeholder="Phone (10 digits)*"
                  maxLength={10}
                  className="p-2 border rounded flex-1"
                  required
                />
                <button
                  type="button"
                  onClick={sendOtp}
                  className="px-3 py-2 bg-indigo-600 text-white rounded"
                >
                  Send OTP
                </button>
              </div>

              <input
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Degree*"
                className="p-2 border rounded"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Current working position*"
                className="p-2 border rounded"
                required
              />
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="p-2 border rounded"
              >
                <option>Web Development</option>
                <option>Data Science</option>
                <option>AI / Machine Learning</option>
                <option>Mobile Development</option>
                <option>DevOps / Cloud</option>
                <option>Other</option>
              </select>
            </div>

            {otpSent && (
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <input
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value.replace(/[^0-9]/g, ""))}
                    placeholder="Enter OTP"
                    maxLength={6}
                    className="p-2 border rounded flex-1"
                  />
                  <button
                    type="button"
                    onClick={verifyOtp}
                    className="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Verify
                  </button>
                </div>
                <div className="text-xs text-gray-500">{otpMessage}</div>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={!otpVerified || isSubmitting}
                className={`w-full py-2 rounded text-white ${
                  otpVerified && !isSubmitting ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div className="mt-3 text-xs text-gray-500">
            Modal has no direct close button by design.
          </div>
        </div>
      </div>

      {/* Success popup (closable) */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setIsSuccessOpen(false)}
          />
          <div className="relative bg-white rounded-lg p-6 shadow-lg z-80 w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-2">Registration Successful</h3>
            <p className="mb-4">You will be getting the portal link through email shortly.</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setIsSuccessOpen(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
