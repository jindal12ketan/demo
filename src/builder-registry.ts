"use client";
import { builder, Builder, Content } from "@builder.io/react";
import Carousel from "./components/Carousel/Carousel";
import ContentAndImageCarousel from "./components/ContentAndImageCarousel/ContentAndImageCarousel";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  styleStrictMode: false,
  designTokensOptional: true,
  designTokens: {
    colors: [
      // === Brand Colors ===
      { name: "Primary", value: "var(--primary, #006269)" },
      {
        name: "Primary Opaque",
        value: "var(--primary-opaque, rgba(0, 98, 105, 0.1))",
      },
      {
        name: "Primary Dimmed",
        value: "var(--primary-dimmed, rgba(0, 98, 105, 0.15))",
      },
      { name: "Secondary", value: "var(--secondary, #00b0b9)" },
      { name: "Accent Orange", value: "var(--accent-orange, #f5875f)" },
      {
        name: "Primary Light Green",
        value: "var(--primary-lightgreen, #40c1ac)",
      },
      // === Feedback Colors ===
      { name: "Success", value: "var(--success, #57a773)" },
      { name: "Warning", value: "var(--warning, #f19953)" },
      { name: "Error", value: "var(--error, #a40000)" },
      { name: "Validation Error", value: "var(--validation-error, #d86464)" },
      {
        name: "Validation Success",
        value: "var(--validation-success, #94cd98)",
      },
      // === Neutral Colors ===
      { name: "Black", value: "var(--black, #2f2f2f)" },
      { name: "Grey Dark", value: "var(--grey-dark, #868686)" },
      { name: "Grey", value: "var(--grey, #dcdcdc)" },
      { name: "Grey Light", value: "var(--grey-light, #f8f6f3)" },
      { name: "White", value: "var(--white, #ffffff)" },
    ],
    spacing: [
      // === Layout ===
      { name: "Content Max Width", value: "var(--content-max-width, 1440px)" },
      {
        name: "Content Width Desktop",
        value: "var(--content-width-desktop, 1048px)",
      },
      { name: "Gutter", value: "var(--gutter, 20px)" },
      { name: "Section Padding", value: "var(--section-padding, 60px)" },
      { name: "Content Padding", value: "var(--content-padding, 15px)" },
      { name: "Form Field Gap", value: "var(--form-field-gap, 18px)" },
      // === Components ===
      { name: "Button Padding", value: "var(--button-padding, 12px 24px)" },
      { name: "Card Padding", value: "var(--card-padding, 20px)" },
      { name: "Input Padding", value: "var(--input-padding, 10px 15px)" },
      { name: "Heading Margin", value: "var(--heading-margin, 20px)" },
      { name: "Text Margin", value: "var(--text-margin, 15px)" },
    ],
    fontFamily: [
      {
        name: "Primary Font",
        value: "var(--font-primary, 'Proxima Nova', sans-serif)",
      },
      {
        name: "Secondary Font",
        value: "var(--font-secondary, 'PT Serif', serif)",
      },
      {
        name: "Script Font",
        value: "var(--font-script, 'Dancing Script', sans-serif)",
      },
      {
        name: "Display Font",
        value: "var(--font-display, 'Canela Web', sans-serif)",
      },
    ],
    fontSize: [
      { name: "Small", value: "var(--font-size-small, 0.833rem)" },
      { name: "Base", value: "var(--font-size-base, 1rem)" },
      { name: "Large", value: "var(--font-size-large, 1.2rem)" },
      { name: "Larger", value: "var(--font-size-larger, 1.44rem)" },
      { name: "Largest", value: "var(--font-size-largest, 1.728rem)" },
      { name: "Heading 1", value: "var(--font-size-h1, 3.5rem)" },
      { name: "Heading 2", value: "var(--font-size-h2, 2.917rem)" },
      { name: "Heading 3", value: "var(--font-size-h3, 2.431rem)" },
      { name: "Heading 4", value: "var(--font-size-h4, 2.027rem)" },
      { name: "Heading 5", value: "var(--font-size-h5, 1.688rem)" },
      { name: "Heading 6", value: "var(--font-size-h6, 1.407rem)" },
    ],
    fontWeight: [
      { name: "Regular", value: "var(--font-weight-regular, 400)" },
      { name: "Medium", value: "var(--font-weight-medium, 500)" },
      { name: "Semi Bold", value: "var(--font-weight-semibold, 600)" },
      { name: "Bold", value: "var(--font-weight-bold, 700)" },
    ],
    lineHeight: [
      { name: "Smallest", value: "var(--line-height-smallest, 1.2)" },
      { name: "Small", value: "var(--line-height-small, 1.5)" },
      { name: "Base", value: "var(--line-height-base, 1.6)" },
      { name: "Large", value: "var(--line-height-large, 1.8)" },
    ],
    borderRadius: [
      { name: "Default", value: "var(--border-radius-default, 2px)" },
      { name: "Large", value: "var(--border-radius-large, 4px)" },
    ],
    zIndex: [
      { name: "Dropdown", value: "var(--z-dropdown, 1000)" },
      { name: "Modal", value: "var(--z-modal, 2000)" },
      { name: "Tooltip", value: "var(--z-tooltip, 3000)" },
      { name: "Overlay", value: "var(--z-overlay, 2147483640)" },
    ],
    shadows: [
      {
        name: "Small",
        value: "var(--shadow-small, 0px 2px 4px rgba(0, 0, 0, 0.1))",
      },
      {
        name: "Medium",
        value: "var(--shadow-medium, 0px 4px 8px rgba(0, 0, 0, 0.1))",
      },
      {
        name: "Large",
        value: "var(--shadow-large, 0px 8px 16px rgba(0, 0, 0, 0.1))",
      },
    ],
    sizes: [
      { name: "Header Height", value: "var(--header-height, 130px)" },
      { name: "Button Height", value: "var(--button-height, 55px)" },
      { name: "Input Height", value: "var(--input-height, 55px)" },
    ],
  },
});

Builder.registerComponent(Carousel, {
  name: "Carousel",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "backgroundImage",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
          required: true,
        },
        {
          name: "textContent",
          type: "richText",
          required: false,
          helperText: "Add formatted text content for this slide",
        },
        {
          name: "ctaButtonPrimary",
          type: "object",
          subFields: [
            { name: "label", type: "text" },
            { name: "url", type: "url" },
          ],
        },
        {
          name: "ctaButtonSecondary",
          type: "object",
          subFields: [
            { name: "label", type: "text" },
            { name: "url", type: "url" },
          ],
        },
      ],
      required: true,
    },
    {
      name: "autoPlayInterval",
      type: "number",
      helperText: "Time in ms between slides",
      defaultValue: 5000,
    },
  ],
});

Builder.registerComponent(ContentAndImageCarousel, {
  name: "ContentAndImageCarousel",
  inputs: [
    {
      name: "contents",
      type: "list",
      subFields: [
        {
          name: "textContent",
          type: "richText",
          required: true,
          helperText: "Add formatted text content for this slide",
        },
      ],
      required: true,
    },
    {
      name: "headerContent",
      type: "richText",
      required: true,
      helperText: "Add formatted text content for this slide",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      required: true,
    },
    {
      name: "ctaButton",
      type: "object",
      subFields: [
        { name: "label", type: "text" },
        { name: "url", type: "url" },
      ],
    },
  ],
});
