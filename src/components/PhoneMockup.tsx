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

  // Render sub-screens based on activeRole for non-image roles
  const renderScreenContent = () => {
    const roleTitles: Record<string, string> = {
      manufacturer: "Manufacturer Node",
      distributor: "Distributor Node",
      institution: "Institution Node",
      organics: "Organics Node",
    };

    const title = roleTitles[activeRole] || "Workspace Node";

    return (
      <div 
        style={{ 
          height: "100%", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          textAlign: "center", 
          padding: "24px 16px", 
          background: "#ffffff",
          borderRadius: "24px"
        }}
      >
        <div 
          style={{ 
            width: "56px", 
            height: "56px", 
            borderRadius: "50%", 
            background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(2,132,199,0.1) 100%)", 
            border: "1px solid rgba(37,99,235,0.2)",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "var(--brand-blue)", 
            marginBottom: "16px" 
          }}
        >
          <Sparkles size={26} />
        </div>

        <span 
          style={{ 
            fontSize: "10px", 
            fontWeight: "700", 
            textTransform: "uppercase", 
            letterSpacing: "0.5px", 
            color: "var(--brand-blue)", 
            background: "rgba(37,99,235,0.08)", 
            padding: "4px 10px", 
            borderRadius: "100px", 
            marginBottom: "12px" 
          }}
        >
          {title}
        </span>

        <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "8px", letterSpacing: "-0.5px" }}>
          Coming Soon
        </h3>

        <p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.5", marginBottom: "20px", maxWidth: "220px" }}>
          The native mobile application for this node workspace is currently under active development.
        </p>

        <div style={{ width: "100%", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: "700", color: "#334155" }}>
            <span>Mobile Module Status</span>
            <span style={{ color: "#2563eb" }}>In Progress</span>
          </div>
          <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "100px", overflow: "hidden" }}>
            <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #2563eb 0%, #0284c7 100%)", borderRadius: "100px" }} />
          </div>
        </div>
      </div>
    );
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

            {/* Top-Left Back Button Hotspot (<) for Community */}
            {activeRole === "community" && communitySubTab !== "feed" && (
              <button 
                style={{ 
                  position: "absolute", 
                  top: "32px", 
                  left: "8px", 
                  width: "55px", 
                  height: "55px", 
                  zIndex: 50, 
                  background: "transparent", 
                  border: "none", 
                  cursor: "pointer" 
                }} 
                onClick={() => setCommunitySubTab("feed")} 
                title="Go Back to Feed"
                id="community-back-button"
              />
            )}

            {/* Top-Left Back Button Hotspot (<) for Importer */}
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

