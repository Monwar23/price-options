
const PriceOptions = () => {
    const priceOptions=
    [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Discounts on personal training sessions",
            "Online workout tracking",
            "Monthly gym challenges",
            "Access to stretching and warm-up area"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$49.99/month",
          "features": [
            "Access to all equipment and facilities",
            "Group fitness classes included",
            "Access to sauna and steam room",
            "Monthly fitness assessment",
            "Access to indoor swimming pool",
            "Discounts on merchandise",
            "Personal locker rental"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$79.99/month",
          "features": [
            "Priority booking for classes",
            "Free towel service",
            "Nutrition consultation",
            "Access to exclusive member events",
            "Complimentary guest passes",
            "Access to specialized training programs",
            "Monthly massage therapy session"
          ]
        }
      ];
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices</h2>
            <div className="grid grid-cols-3 gap-4">
            {
                priceOptions.map(option=><PriceOptions key={option.id} option={option}></PriceOptions>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;