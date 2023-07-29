const membershipData = [
  {
    name: "Basic Membership",
    description: "Access to basic gym facilities and equipment.",
    price: 30,
    features: ["Access to gym", "Cardio equipment", "Strength training area"],
  },
  {
    name: "Premium Membership",
    description: "Access to all gym facilities, classes, and amenities.",
    price: 50,
    features: [
      "Access to gym",
      "Cardio equipment",
      "Strength training area",
      "Group fitness classes",
      "Personal training sessions",
    ],
  },
  {
    name: "VIP Membership",
    description: "Exclusive access to all gym facilities, classes, amenities, and more.",
    price: 100,
    features: [
      "Access to gym",
      "Cardio equipment",
      "Strength training area",
      "Group fitness classes",
      "Personal training sessions",
      "Spa and sauna",
      "Nutrition consultation",
      "Towel service",
      "Priority booking for special events",
    ],
  },
];

export function Pricing() {
  return (
    <div className="membership-container">
      {membershipData.map((membership, index) => (
        <div key={index} className="membership">
          <h2>{membership.name}</h2>
          <p>{membership.description}</p>
          <p>${membership.price}/month</p>
          <ul>
            {membership.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
