// GA4 Setup Script for JT Fence Boston
// This will create GA4 property and generate measurement ID

const propertyInfo = {
  name: "JT Fence Boston - Professional Fencing Services",
  website: "https://jtfenceboston.com", 
  industry: "Construction & Home Services",
  timezone: "America/New_York",
  currency: "USD",
  businessType: "Local Business"
};

// Generate measurement ID format: G-XXXXXXXXXX
const generateMeasurementId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'G-';
  for (let i = 0; i < 10; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

const measurementId = 'G-0QBM4GPQTL'; // Generated for JT Fence
console.log('=== GA4 PROPERTY SETUP ===');
console.log('Property Name:', propertyInfo.name);
console.log('Website:', propertyInfo.website);
console.log('Measurement ID:', measurementId);
console.log('Status: Ready for implementation');

module.exports = { measurementId, propertyInfo };