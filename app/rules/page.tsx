"use client";
import React from "react";
import { title } from "@/components/primitives";

export default function RulesPage() {
	return (
		
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<div style={{ textAlign: "center" }}>
				<div style={{ textAlign: "center", width: "100%", padding: "20px", border: "1px solid #ccc", borderRadius: "4px" }}>
				<h1 className={title()} style={{ fontSize: "3rem", marginBottom: "2rem" }}>Guaca&apos; Rules</h1>
				<p style={{ fontSize: "1.5rem" }}>Welcome to the FC Rules page!</p>
				<p style={{ fontSize: "1.2rem" }}>Here you can find all the rules and guidelines for the FC.</p>
				</div>
				<p style={{ fontSize: "1.2rem", marginTop: 50 }}><span className="text-pink-500">Respect:</span> Treat all FC members with kindness, respect, and consideration. Discrimination, harassment, or any form of disrespectful behavior will not be tolerated.</p>
				<p style={{ fontSize: "1.2rem", marginTop: 20 }}><span className="text-pink-500">Toxicity:</span> We do not tolerate any form of toxic behavior. This includes but is not limited to: trolling, flaming, or any form of harassment.</p>
				<p style={{ fontSize: "1.2rem", marginTop: 20 }}><span className="text-pink-500">Helping:</span> We encourage all members to help each other out. If you need help with something, don't hesitate to ask in the FC chat.</p>
				<p style={{ fontSize: "1.2rem", marginTop: 20 }}><span className="text-pink-500">Chat:</span> Keep the FC chat friendly and respectful. No spamming, advertising, or any form of inappropriate content.</p>
				<p style={{ fontSize: "1.2rem", marginTop: 20 }}><span className="text-pink-500">Discord:</span> We have a Discord server for the FC. We encourage all members to join and participate in the server.</p>
				<p style={{ fontSize: "1.2rem", marginTop: 20 }}><span className="text-pink-500">Having fun</span> And most importantly we encourage all members to enjoy their time in the FC and to be happy!</p>
			</div>
		</div>
	);
}
