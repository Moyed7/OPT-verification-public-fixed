export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>OTP API Ready ✅</h1>
      <p>Send a POST request to <code>/api/send-otp</code> with JSON: {"{ email, otp }"}</p>
    </div>
  );
}
