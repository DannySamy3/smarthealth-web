"use client";

import { useState, useEffect } from "react";
import { 
  BarChart3, 
  MapPin, 
  Upload, 
  FileText, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight, 
  Thermometer, 
  Truck, 
  Layers,
  Database,
  Building,
  HeartPulse,
  Bot,
  MessageSquare,
  Activity,
  Radio,
  UserCheck,
  ThumbsUp,
  MessageCircle,
  Share2,
  Phone,
  Navigation,
  Sparkles,
  Play,
  Grid,
  Search,
  User,
  CheckCircle,
  ArrowLeft,
  Plus,
  Clock,
  Send,
  Wifi,
  Battery,
  Signal
} from "lucide-react";
import styles from "./PhoneMockup.module.css";

interface PhoneMockupProps {
  activeRole: "manufacturer" | "importer" | "distributor" | "institution" | "community" | "organics";
}

export default function PhoneMockup({ activeRole }: PhoneMockupProps) {
  const [communitySubTab, setCommunitySubTab] = useState<"feed" | "hospitals" | "broadcast" | "consult">("broadcast");
  const [importerSubTab, setImporterSubTab] = useState<"dashboard" | "inventory" | "sales" | "more" | "add_item">("dashboard");
  const [consultView, setConsultView] = useState<"list" | "ai">("list");

  useEffect(() => {
    if (activeRole !== "community") {
      setCommunitySubTab("broadcast");
    }
    if (activeRole !== "importer") {
      setImporterSubTab("dashboard");
    }
  }, [activeRole]);

  const hasImageScreens = activeRole === "community" || activeRole === "importer";

  const getScreenImageSrc = () => {
    if (activeRole === "community") {
      switch (communitySubTab) {
        case "feed": return "/images/app_feed.png";
        case "hospitals": return "/images/app_hospitals.png";
        case "broadcast": return "/images/app_broadcast.png";
        case "consult": return "/images/app_consult.png";
        default: return "/images/app_broadcast.png";
      }
    }
    if (activeRole === "importer") {
      switch (importerSubTab) {
        case "dashboard": return "/images/importer_dashboard.png";
        case "inventory": return "/images/importer_inventory.png";
        case "add_item": return "/images/importer_add_item.png";
        case "sales": return "/images/importer_sell.png";
        case "more": return "/images/importer_more.png";
        default: return "/images/importer_dashboard.png";
      }
    }
    return "";
  };

  // Render sub-screens based on activeRole
  const renderScreenContent = () => {
    switch (activeRole) {
      case "manufacturer":
        return (
          <>
            <div className={styles.appHeader}>
              <div className={styles.appName}>
                <Layers size={14} /> Smart Batch
              </div>
              <span className={styles.roleIndicator}>Mfg Node</span>
            </div>

            <div className={styles.widget}>
              <div className={styles.flexBetween}>
                <span className={styles.widgetTitle}>Active Production</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`}>Certified</span>
              </div>
              <div className={styles.flexBetween} style={{ marginTop: "4px" }}>
                <span className={styles.label}>Batch ID</span>
                <span className={styles.value}>SH-8820B</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Product</span>
                <span className={styles.value}>Amoxicillin 500mg</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Count</span>
                <span className={styles.value}>10,000 Pcs</span>
              </div>
            </div>

            <div className={styles.widget}>
              <span className={styles.widgetTitle}>Traceability Pipeline</span>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={`${styles.timelineDot} ${styles.timelineDotActive}`}></div>
                  <div className={styles.timelineContent}>
                    <p className={styles.timelineTitle}>Serialization Complete</p>
                    <p className={styles.timelineSub}>Secured RFID & Barcode mapped</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={`${styles.timelineDot} ${styles.timelineDotActive}`}></div>
                  <div className={styles.timelineContent}>
                    <p className={styles.timelineTitle}>Lab Report Attached</p>
                    <p className={styles.timelineSub}>Passed purity standards (99.8%)</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <p className={styles.timelineTitle}>Pending Importer Claim</p>
                    <p className={styles.timelineSub}>Awaiting verification node</p>
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.appBtn}>
              Serialize New Batch <ArrowRight size={10} style={{ marginLeft: "4px", display: "inline" }} />
            </button>
          </>
        );

      case "importer":
        return null;

      case "distributor":
        return (
          <>
            <div className={styles.appHeader}>
              <div className={styles.appName}>
                <Truck size={14} /> Smart Logis
              </div>
              <span className={styles.roleIndicator}>Distributor</span>
            </div>

            <div className={styles.mapArea}>
              <div className={styles.mapGrid} />
              <div className={styles.routeLine}>
                <div className={styles.routeLineProgress} />
              </div>
              <div className={`${styles.mapPin} ${styles.pin1}`} title="Manufacturer Node" />
              <div className={`${styles.mapPin} ${styles.pin2}`} title="Transit Current Location" />
              <div className={`${styles.mapPin} ${styles.pin3}`} title="Destination Hospital" />
            </div>

            <div className={styles.widget}>
              <div className={styles.flexBetween}>
                <span className={styles.widgetTitle}>Transit Telemetry</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`}>Normal</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Thermometer size={14} style={{ color: "var(--brand-blue)" }} />
                  <div>
                    <p className={styles.label}>Cold Chain</p>
                    <p className={styles.value} style={{ fontSize: "11px" }}>4.2 °C</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={14} style={{ color: "var(--brand-blue)" }} />
                  <div>
                    <p className={styles.label}>Speed</p>
                    <p className={styles.value} style={{ fontSize: "11px" }}>48 km/h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.widget}>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Destination</span>
                <span className={styles.value}>Muhimbili Hosp.</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>ETA</span>
                <span className={styles.value} style={{ color: "var(--brand-blue)" }}>18 Mins</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Carrier ID</span>
                <span className={styles.value}>TZ-TX-802B</span>
              </div>
            </div>
          </>
        );

      case "institution":
        return (
          <>
            <div className={styles.appHeader}>
              <div className={styles.appName}>
                <Building size={14} /> Clinic Shelf
              </div>
              <span className={styles.roleIndicator}>Institution</span>
            </div>

            <div className={styles.widget} style={{ padding: "0.5rem 0.75rem" }}>
              <div className={styles.flexBetween}>
                <div>
                  <p className={styles.label}>Pharmacy Stocks</p>
                  <p className={styles.value} style={{ fontSize: "1.125rem", fontWeight: "800" }}>92.4%</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className={styles.label}>Critical Alerts</p>
                  <span className={`${styles.badge} ${styles.badgeDanger}`}>2 Low</span>
                </div>
              </div>
            </div>

            <div className={styles.widget}>
              <span className={styles.widgetTitle}>Compliance & Stock List</span>
              <div className={styles.stockList}>
                <div>
                  <div className={styles.stockItem}>
                    <span style={{ fontSize: "10px", fontWeight: "600" }}>Amoxicillin 500mg</span>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>24 Boxes</span>
                  </div>
                  <div className={styles.stockBar}>
                    <div className={styles.stockProgress} style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div className={styles.stockItem}>
                    <span style={{ fontSize: "10px", fontWeight: "600", color: "var(--danger)" }}>Paracetamol 100mg</span>
                    <span style={{ fontSize: "10px", fontWeight: "700", color: "var(--danger)" }}>2 Boxes</span>
                  </div>
                  <div className={styles.stockBar}>
                    <div className={styles.stockProgress} style={{ width: "8%", backgroundColor: "var(--danger)" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.widget} style={{ borderLeft: "3px solid var(--brand-blue)" }}>
              <p style={{ fontSize: "10px", fontWeight: "700" }}>Incoming Shipment</p>
              <p className={styles.label}>Carrier TZ-TX-802B in transit.</p>
              <button className={styles.appBtn} style={{ padding: "4px", fontSize: "10px", marginTop: "6px" }}>
                Acknowledge Receipt
              </button>
            </div>
          </>
        );

      case "organics":
        return (
          <>
            <div className={styles.appHeader}>
              <div className={styles.appName}>
                <Layers size={14} /> Smart Organics
              </div>
              <span className={styles.roleIndicator}>Supplements</span>
            </div>

            <div className={styles.widget}>
              <div className={styles.flexBetween}>
                <span className={styles.widgetTitle}>Supplement Batch</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`}>Certified</span>
              </div>
              <div className={styles.flexBetween} style={{ marginTop: "4px" }}>
                <span className={styles.label}>Batch ID</span>
                <span className={styles.value}>ORG-902V</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Product</span>
                <span className={styles.value}>Vitamin C + Zinc</span>
              </div>
              <div className={styles.flexBetween}>
                <span className={styles.label}>Origin</span>
                <span className={styles.value}>Organic Herbs Ltd</span>
              </div>
            </div>

            <div className={styles.widget} style={{ borderLeft: "3px solid #10b981" }}>
              <p style={{ fontSize: "10px", fontWeight: "700" }}>Purity Standards Check</p>
              <p className={styles.label}>Passed heavy metals & organic verification checks.</p>
              <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                <span className={`${styles.badge} ${styles.badgeSuccess}`} style={{ fontSize: "7px" }}>100% Vegan</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`} style={{ fontSize: "7px" }}>GMP Verified</span>
              </div>
            </div>

            <div className={styles.widget}>
              <span className={styles.widgetTitle}>Active Catalog Listings</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px" }}>
                  <span>Omega-3 Fish Oil</span>
                  <span>140 Units</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px" }}>
                  <span>Multivitamin Complex</span>
                  <span>380 Units</span>
                </div>
              </div>
            </div>

            <button className={styles.appBtn} style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
              Add New Supplement
            </button>
          </>
        );

      case "community":
        return null;

      default:
        return null;
    }
  };

  return (
    <div className={styles.phoneChassis} id="interactive-phone-frame">
      <div className={styles.buttonPower} />
      <div className={styles.buttonVolumeUp} />
      <div className={styles.buttonVolumeDown} />
      
      <div className={styles.screen}>
        {hasImageScreens ? (
          <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#ffffff", borderRadius: "32px", display: "flex", flexDirection: "column" }}>
            {/* Dynamic Island Notch */}
            <div className={styles.notch} style={{ zIndex: 45 }}>
              <div className={styles.notchCamera} />
            </div>

            {/* Realistic Top iOS Status Bar */}
            <div 
              className={styles.statusBar} 
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                right: 0, 
                height: "36px", 
                zIndex: 40, 
                color: "#0f172a",
                padding: "8px 18px 0 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11px",
                fontWeight: "700",
                background: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "-0.2px", color: "#0f172a" }}>9:41</span>
              <div className={styles.statusIcons} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Signal size={11} style={{ color: "#0f172a" }} />
                <Wifi size={11} style={{ color: "#0f172a" }} />
                <Battery size={13} style={{ color: "#0f172a" }} />
              </div>
            </div>

            {/* App Screenshot Content Padded Below Status Bar and Above Home Bar */}
            <div 
              style={{ 
                position: "absolute", 
                top: activeRole === "importer" ? "42px" : "32px", 
                bottom: activeRole === "importer" ? "10px" : "16px", 
                left: 0, 
                right: 0, 
                overflow: "hidden" 
              }}
            >
              <img 
                src={getScreenImageSrc()} 
                alt={`${activeRole} view`} 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </div>

            {/* Top-Left Back Button Hotspot (<) */}
            {activeRole === "importer" && importerSubTab !== "dashboard" && (
              <button 
                style={{ 
                  position: "absolute", 
                  top: "40px", 
                  left: "8px", 
                  width: "55px", 
                  height: "55px", 
                  zIndex: 50, 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer" 
                }} 
                onClick={() => {
                  if (importerSubTab === "add_item") {
                    setImporterSubTab("inventory");
                  } else {
                    setImporterSubTab("dashboard");
                  }
                }} 
                title="Go Back"
                id="importer-back-button"
              />
            )}

            {/* Top-Right Action Hotspot (+ Add) for Inventory Screen */}
            {activeRole === "importer" && importerSubTab === "inventory" && (
              <button 
                style={{ 
                  position: "absolute", 
                  top: "40px", 
                  right: "8px", 
                  width: "95px", 
                  height: "55px", 
                  zIndex: 50, 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer" 
                }} 
                onClick={() => setImporterSubTab("add_item")} 
                title="Add New Item"
                id="importer-add-item-button"
              />
            )}

            {/* Top-Right Save Button Hotspot for Add Item Screen */}
            {activeRole === "importer" && importerSubTab === "add_item" && (
              <button 
                style={{ 
                  position: "absolute", 
                  top: "40px", 
                  right: "8px", 
                  width: "95px", 
                  height: "55px", 
                  zIndex: 50, 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer" 
                }} 
                onClick={() => setImporterSubTab("inventory")} 
                title="Save Item"
                id="importer-save-item-button"
              />
            )}

            {/* Transparent Hotspot overlay over bottom navigation bar of screenshot */}
            <div 
              style={{ 
                position: "absolute", 
                bottom: "16px", 
                left: 0, 
                right: 0, 
                height: "50px", 
                display: "flex", 
                zIndex: 30, 
                background: "transparent" 
              }} 
              id="role-bottom-tab-bar"
            >
              {activeRole === "community" ? (
                <>
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setCommunitySubTab("feed")} 
                    title="Feed" 
                    id="subtab-feed"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setCommunitySubTab("hospitals")} 
                    title="Hospitals" 
                    id="subtab-hospitals"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setCommunitySubTab("broadcast")} 
                    title="Broadcast" 
                    id="subtab-broadcast"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setCommunitySubTab("consult")} 
                    title="Consult" 
                    id="subtab-consult"
                  />
                </>
              ) : (
                <>
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setImporterSubTab("dashboard")} 
                    title="Dashboard" 
                    id="importer-dashboard"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setImporterSubTab("inventory")} 
                    title="Inventory" 
                    id="importer-inventory"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setImporterSubTab("sales")} 
                    title="Sales" 
                    id="importer-sales"
                  />
                  <button 
                    style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer" }} 
                    onClick={() => setImporterSubTab("more")} 
                    title="Menu" 
                    id="importer-more"
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.notch}>
              <div className={styles.notchCamera} />
            </div>
            
            <div className={styles.statusBar}>
              <span>12:30</span>
              <div className={styles.statusIcons}>
                <BarChart3 size={10} style={{ transform: "rotate(90deg)" }} />
                <span style={{ fontSize: "9px" }}>5G</span>
                <div style={{ width: "14px", height: "8px", border: "1px solid var(--text-primary)", borderRadius: "2px", position: "relative", padding: "1px" }}>
                  <div style={{ width: "100%", height: "100%", backgroundColor: "var(--text-primary)", borderRadius: "1px" }} />
                </div>
              </div>
            </div>

            <div className={styles.content}>
              {renderScreenContent()}
            </div>
          </>
        )}

        <div className={styles.homeIndicator} style={{ zIndex: 40 }} />
      </div>
    </div>
  );
}

