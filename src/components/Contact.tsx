"use client";

import React, { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  budgetOptions,
  contactPoints,
  projectTypes,
  timelineOptions,
} from "@/lib/siteContent";

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    projectType: "",
    projectBudget: "",
    timeline: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType || "New project"}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Email Address: ${formData.email}`,
        `Company Name: ${formData.companyName || "Not provided"}`,
        `Project Type: ${formData.projectType || "Not provided"}`,
        `Project Budget: ${formData.projectBudget || "Not provided"}`,
        `Timeline: ${formData.timeline || "Not provided"}`,
        "",
        "Project Details:",
        formData.projectDetails,
      ].join("\n"),
    );

    window.location.href = `mailto:hello@layer7solution.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      projectType: "",
      projectBudget: "",
      timeline: "",
      projectDetails: "",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-white via-slate-50 to-slate-950 transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-28 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
            Tell us what you&apos;re building
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share the scope, budget, and timeline. We&apos;ll respond with a
            practical next step, not a generic pitch.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-card-strong">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
                <Field
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                />
              </div>

              <Field
                label="Company Name"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Project Type"
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  options={projectTypes}
                  placeholder="Select a project type"
                />
                <SelectField
                  label="Project Budget"
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleInputChange}
                  options={budgetOptions}
                  placeholder="Select a budget range"
                />
              </div>

              <SelectField
                label="Timeline"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                options={timelineOptions}
                placeholder="Select a timeline"
              />

              <div>
                <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-slate-700">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={6}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  placeholder="What are you trying to build, what stage are you at, and what matters most right now?"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:scale-[1.01] hover:from-teal-700 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Preparing..." : "Send Project Details"}
                </button>
                <a
                  href="mailto:hello@layer7solution.com?subject=Discovery%20Call"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
                >
                  Book a Discovery Call
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Prefer email? Contact us at{" "}
                <a
                  href="mailto:hello@layer7solution.com"
                  className="font-medium text-slate-700 transition hover:text-teal-700"
                >
                  hello@layer7solution.com
                </a>
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="panel-card">
              <h3 className="text-2xl font-semibold text-slate-950">
                What working with us looks like
              </h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
                  Clear weekly updates and milestone-based delivery.
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
                  We care about clean handoffs, not just flashy prototypes.
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
                  Post-launch support is available if you need ongoing help.
                </div>
              </div>
            </div>

            <div className="panel-card-dark border-white/10">
              <h3 className="text-2xl font-semibold">Direct contact</h3>
              <div className="mt-6 space-y-4">
                {contactPoints.map((point) =>
                  point.href ? (
                    <a
                      key={point.label}
                      href={point.href}
                      target={point.label === "Location" ? "_blank" : undefined}
                      rel={point.label === "Location" ? "noopener noreferrer" : undefined}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {point.label}
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">
                        {point.value}
                      </div>
                    </a>
                  ) : (
                    <div
                      key={point.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {point.label}
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">
                        {point.value}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

const Field = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: FieldProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
      placeholder={placeholder}
    />
  </div>
);

type SelectFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
};

const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
}: SelectFieldProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Contact;
