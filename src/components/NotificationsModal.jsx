import React from "react";
import { X, Bell, AlertCircle, Check } from "lucide-react";

function NotificationsModal({ onClose, expenses }) {
  const calculateTodayTotal = () => {
    const today = new Date().toISOString().split("T")[0];
    return expenses
      .filter(exp => exp.date === today)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  const calculateMonthlyTotal = () => {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    return expenses
      .filter(exp => new Date(exp.date) >= monthStart)
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  const todayTotal = calculateTodayTotal();
  const monthlyTotal = calculateMonthlyTotal();

  const getNotifications = () => {
    const notifications = [];

    if (todayTotal > 30) {
      notifications.push({
        id: 1,
        type: "warning",
        title: "Daily Spending Limit Exceeded",
        message: `You have spent ₹${todayTotal.toFixed(2)} today, which exceeds your daily limit of ₹30.`,
      });
    }

    if (monthlyTotal > 1000) {
      notifications.push({
        id: 2,
        type: "warning",
        title: "Monthly Spending Limit Exceeded",
        message: `You have spent ₹${monthlyTotal.toFixed(2)} this month, which exceeds your monthly limit of ₹1000.`,
      });
    }

    if (notifications.length === 0) {
      notifications.push({
        id: 3,
        type: "success",
        title: "Spending Within Limits",
        message: "Your spending is within the set daily and monthly limits. Keep it up!",
      });
    }

    return notifications;
  };

  const notifications = getNotifications();

  const getNotificationStyles = (type) => {
    const styles = {
      warning: {
        backgroundColor: "#fef3c7",
        borderColor: "#fde68a",
        iconColor: "#f59e0b",
        textColor: "#92400e",
      },
      success: {
        backgroundColor: "#dcfce7",
        borderColor: "#bbf7d0",
        iconColor: "#16a34a",
        textColor: "#166534",
      },
    };
    return styles[type] || styles.success;
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
          padding: "32px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                backgroundColor: "#fef3c7",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              <Bell size={24} style={{ color: "#f59e0b" }} />
            </div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
              Notifications
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
          {notifications.map((notification) => {
            const styles = getNotificationStyles(notification.type);
            const Icon = notification.type === "warning" ? AlertCircle : Check;

            return (
              <div
                key={notification.id}
                style={{
                  backgroundColor: styles.backgroundColor,
                  border: `1px solid ${styles.borderColor}`,
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ marginTop: "2px" }}>
                  <Icon size={20} style={{ color: styles.iconColor }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontWeight: "600",
                      color: styles.textColor,
                      marginBottom: "4px",
                    }}
                  >
                    {notification.title}
                  </p>
                  <p style={{ fontSize: "14px", color: styles.textColor }}>
                    {notification.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NotificationsModal;
