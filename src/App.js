import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";
import BucketCard from "./components/BucketCard";
import "./App.css";
import bucketData from "./data/bucketkpis.json";

// ---- Individual Bucket Page ----
function BucketPage({ buckets }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const bucketIndex = parseInt(id, 10) - 1;
  const bucket = buckets[bucketIndex];

  if (!bucket) {
    return <h2 style={{ textAlign: "center" }}>⚠ Bucket not found</h2>;
  }

  return (
    <div className="bucket-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to All Buckets
      </button>
      <BucketCard
        title={bucket.title}
        description={bucket.description}
        businessKPIs={bucket.businessKPIs || []}
        technicalKPIs={bucket.technicalKPIs || []}
        sourceUseCases={bucket.sourceUseCases || []}
        formulas={bucket.formulas || []}
        intakeNeeds={bucket.intakeNeeds || []}
        whyBusiness={bucket.whyBusiness || ""}
        whyTechnical={bucket.whyTechnical || ""}
        kpiHistory={bucket.kpiHistory || []}
      />
    </div>
  );
}

// ---- Home Page: All Buckets ----
function Home({ buckets }) {
  return (
    <div className="bucket-container">
      {buckets.map((bucket, index) => (
        <section id={`bucket-${index}`} key={index}>
          <BucketCard
            title={bucket.title}
            description={bucket.description}
            businessKPIs={bucket.businessKPIs || []}
            technicalKPIs={bucket.technicalKPIs || []}
            sourceUseCases={bucket.sourceUseCases || []}
            formulas={bucket.formulas || []}
            intakeNeeds={bucket.intakeNeeds || []}
            whyBusiness={bucket.whyBusiness || ""}
            whyTechnical={bucket.whyTechnical || ""}
            kpiHistory={bucket.kpiHistory || []}
          />
        </section>
      ))}
    </div>
  );
}

// ---- Main App ----
function App() {
  const [buckets, setBuckets] = useState([]);
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    if (bucketData && Array.isArray(bucketData)) {
      console.log("✅ Bucket Data Loaded:", bucketData); // Debug
      setBuckets(bucketData);
    } else {
      console.error("❌ bucketData is not an array", bucketData);
    }

    const handleScroll = () => setShrinkHeader(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className={`app-header ${shrinkHeader ? "shrink" : ""}`}>
          <img src="/adobe-logo.png" alt="Adobe Logo" className="logo" />
          <div className="header-text">
            <h1>Adobe on Adobe Executive Value Architecture Framework</h1>
            <p>Explore KPIs across Business & Technical perspectives.</p>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bucket-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            All Buckets
          </NavLink>
          {buckets.map((bucket, index) => (
            <NavLink
              key={index}
              to={`/bucket/${index + 1}`}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {bucket.title}
            </NavLink>
          ))}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home buckets={buckets} />} />
          <Route path="/bucket/:id" element={<BucketPage buckets={buckets} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





















