import assert from "node:assert/strict";
import test from "node:test";
import { getBrandForHostname } from "./brand";

test("uses Peter branding for the Peter production hostname", () => {
  const brand = getBrandForHostname("peter.brainstreammedia.online");

  assert.equal(brand.id, "peter");
  assert.equal(brand.studioName, "Peter's Imagination Station");
  assert.equal(brand.canvasLabel, "HIS CREATIVE CANVAS");
  assert.equal(brand.pageTitle, "Peter's Imagination Station");
  assert.equal(getBrandForHostname("peter.localhost:4175").id, "peter");
});

test("uses Alex branding for the existing production hostname and local development", () => {
  assert.equal(getBrandForHostname("alex.brainstreammedia.online").id, "alex");
  assert.equal(getBrandForHostname("localhost:5173").id, "alex");
});
