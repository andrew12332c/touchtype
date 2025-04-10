import React from "react";
import "stylesheets/SideProfile.scss";

const buttons = [
    "Dashboard",
    "Stats",
    "Themes",
    "Words",
    "Hard Words",
    "Sentences",
    "Numbers",
    "Settings",
    "Help",
    "Logout",
];

export default function SideProfile() {
    return (
        <aside className="side-profile">
            <div className="profile-header">
                <h2>Profile</h2>
            </div>
            <nav className="profile-nav">
                {buttons.map((label, index) => (
                    <button key={index} className="profile-button">
                        {label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}
