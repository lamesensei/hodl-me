import chai from "chai";
import chaiHttp from "chai-http";
import app from "./index.js";

const should = chai.should();

chai.use(chaiHttp);

describe("User Balance API", () => {
  it("it should get user-1's balance", (done) => {
    chai
      .request(app)
      .get("/user/user-1/balances")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("totalBalanceUsd");
        res.body.should.have.property("ETH");
        res.body.should.have.property("BTC");
        done();
      });
  });

  it("it should get user-2's balance", (done) => {
    chai
      .request(app)
      .get("/user/user-2/balances")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("totalBalanceUsd");
        res.body.should.have.property("BTC");
        done();
      });
  });

  it("it should get user-3's balance", (done) => {
    chai
      .request(app)
      .get("/user/user-3/balances")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("totalBalanceUsd");
        res.body.should.have.property("ETH");
        done();
      });
  });

  it("it should return 404 when user not found", (done) => {
    chai
      .request(app)
      .get("/user/user-4/balances")
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.equals("No user with id user-4");
        done();
      });
  });
});
