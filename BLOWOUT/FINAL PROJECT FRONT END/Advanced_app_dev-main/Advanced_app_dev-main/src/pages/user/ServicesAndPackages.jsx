import React from 'react';
import { Bcard } from "../../components/user/Bcard";

const ServicesAndPackages = () => {
  return (
    <div className="packages">
      <Bcard image="https://t4.ftcdn.net/jpg/06/15/94/47/360_F_615944706_YjLpmT0NBQ5aTGoFLgRU2smQNGSoNHbw.jpg" package="Silver" desc="For 5 to 10 members with cool events and party with delicious delights" />
      <Bcard image="https://img.freepik.com/premium-photo/birthday-cake-with-candle-centerpiece-birthday-parties-ancient-greece-when-birth-artemis-goddess-moon-hunting-was-celebrated-time-they-prepared-round-cake_695181-1393.jpg" package="Gold" desc="For 20 to 50 members, make your birthday a memorable one" />
      <Bcard image="https://30birthdayideas.com/wp-content/uploads/2020/03/happy-Birthday-wishes-for-friend-768x458.jpg" package="Diamond" desc="For 60 to 100 members with unlimited fun, party which you will never forget" />
    </div>
  );
}

export default ServicesAndPackages;
