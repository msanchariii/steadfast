"use client";
import React from "react";
// import {
//     Select,
//     SelectTrigger,
//     SelectValue,
//     SelectContent,
//     SelectItem,
// } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
// import { headers } from "next/headers";
const QuoteForm = () => {
    const [submitting, setSubmitting] = React.useState(false);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        // setResult("Sending....");
        const formData = new FormData(e.currentTarget);
        console.log("Form Data:", formData);

        const features = formData.getAll("features").join(",");

        formData.set("features", features);
        try {
            const body = formData.append(
                "access_key",
                "328ccb82-e540-4dcc-b08f-1e038e2cbe2a",
            );
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: JSON.stringify(body),
            });
            // clear form
            e.currentTarget.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            return;
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <form className="grid w-full grid-cols-1 gap-8" onSubmit={submitForm}>
            {/* name */}
            <Label htmlFor="name" className="flex flex-col gap-2 text-left">
                <p className="w-full">Name</p>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />
            </Label>
            {/* email */}
            <Label htmlFor="email" className="flex flex-col gap-2 text-left">
                <p className="w-full">Email</p>
                <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
            </Label>
            {/* phone */}
            <Label htmlFor="phone" className="flex flex-col gap-2 text-left">
                <p className="w-full">Phone</p>
                <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                />
            </Label>
            {/* Budget */}
            <Label htmlFor="budget" className="flex flex-col gap-2 text-left">
                <p className="w-full">Budget</p>
                <Input
                    id="budget"
                    name="budget"
                    placeholder="Enter your budget"
                    required
                />
            </Label>
            {/* What you want? */}
            <div className="col-span-full flex flex-wrap items-center gap-3">
                <p className="w-full font-semibold">What do you want?</p>
                {/* Website */}
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="website-checkbox"
                        name="features"
                        value="website"
                        className="peer"
                    />
                    <Label htmlFor="website-checkbox">Website</Label>
                </div>
                {/* App */}
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="app-checkbox"
                        name="features"
                        value="app"
                        className="peer"
                    />
                    <Label htmlFor="app-checkbox">App</Label>
                </div>
                {/* Ecommerce */}
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="ecommerce-checkbox"
                        name="features"
                        value="ecommerce"
                        className="peer"
                    />
                    <Label htmlFor="ecommerce-checkbox">Ecommerce</Label>
                </div>
                {/* Figma Design */}
                <div className="col-span-full flex items-center gap-2">
                    <Checkbox
                        id="figma-checkbox"
                        name="features"
                        value="figma"
                        className="peer"
                    />
                    <Label htmlFor="figma-checkbox">Figma Design</Label>
                </div>
                {/* SEO */}
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="seo-checkbox"
                        name="features"
                        value="seo"
                        className="peer"
                    />
                    <Label htmlFor="seo-checkbox">SEO</Label>
                </div>
                {/* CMS Integration */}
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="cms-checkbox"
                        name="features"
                        value="cms"
                        className="peer"
                    />
                    <Label htmlFor="cms-checkbox">CMS Integration</Label>
                </div>
            </div>
            <Label className="flex flex-col gap-2 text-left">
                <p className="w-full">Describe your project</p>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    required
                />
            </Label>
            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
                Submit Quote
            </button>
        </form>
    );
};

export default QuoteForm;
