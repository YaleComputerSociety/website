import { SectionTitle } from "../components/SectionTitle";
import logo from "../assets/ycs_black.png";
import { ABOUTUS } from "../data";
import { Fragment } from "react";
import { CardWrapper } from "../components/CardWrapper";

import React from "react";
import "./home.css";
import "../index.css";

export const Home = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <h1 className="text-white text-6xl font-extrabold tracking-wider text-center py-10 md:py-3 bg-green-500">Yale Computer Society</h1>
        <div className="overlap-4">
          <p className="promoting-tech">
            Promoting tech &amp; entrepreneurship <br />
            at Yale University
          </p>
          <p className="bg-cyan-400">hi</p>
          <div className="explore-button">
            <div className="div-wrapper">
              <div className="text-wrapper-12">Join us</div>
            </div>
          </div>
        </div>

        <div className="overlap-group">
          <p className="p">Offer real-world software engineering projects to work on collaboratively.</p>
          <div className="text-wrapper-7">Development</div>
        </div>
        <div className="overlap-2">
          <p className="text-wrapper-8">Plan social events for students to meet and share their interests.</p>
          <div className="text-wrapper-9">Social Events</div>
        </div>
        <div className="overlap-3">
          <p className="text-wrapper-10">Provide mentorship for those hoping to learn more about programming.</p>
          <div className="text-wrapper-11">Mentorship</div>
        </div>

        <div className="overlap-5">
          <p className="from-development">
            From development mentorship to hacking nights, <br />
            we create a community for programmers of all skill levels.
          </p>
          <p className="cultivating-a">
            Cultivating a passion <br />
            for programming
          </p>
        </div>
        <p className="whether-it-s-meeting">
          Whether it’s meeting up with new Yalies for a meal or exploring Yale dorm selections, we’re always thinking of ways to <br />
          help the student body.
        </p>
        <p className="text-wrapper-13">We’re always coming up with new ideas to make things easier.</p>
        <div className="overlap-6">
          <div className="group">
            <p className="text-wrapper-14">The best place to shop for classes at Yale.</p>
            <div className="text-wrapper-15">PRODUCT</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-12">Learn more</div>
              </div>
            </div>
            <div className="text-wrapper-16">CourseTable</div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-7">
              <div className="device-macbook-pro">
                <div className="overlap-7">
                  <div className="shadow" />
                  <div className="top">
                    <div className="overlap-group-2">
                      <div className="dark-screen" />
                      <div className="screen-wrap" />
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="overlap-8">
                      <div className="base" />
                      <img className="bottom-curve" alt="Bottom curve" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/bottom-curve.svg" />
                      <img className="groove" alt="Groove" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/groove.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="screenshot" alt="Screenshot" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/screenshot-2023-07-30-at-2-13-2.png" />
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-9">
            <p className="text-wrapper-17">Then, join the y/cs mentorship to get the wheels turning and jumpstart your programming career at Yale.</p>
            <div className="explore-button-2">
              <div className="div-wrapper">
                <div className="text-wrapper-12">Learn more</div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-18">PROGRAM</div>
          <p className="have-an-idea-but-don">
            Have an idea, but don’t <br />
            know how to get started?
          </p>
        </div>
        <div className="group-wrapper">
          <div className="group-3">
            <p className="text-wrapper-19">Meet Yalies who you’ll vibe with. Trust us, we know.</p>
            <div className="explore-button-3">
              <div className="overlap-group-3">
                <div className="text-wrapper-20">Explore</div>
              </div>
            </div>
            <div className="text-wrapper-21">MealMatch</div>
          </div>
        </div>
        <div className="group-4">
          <div className="group-5">
            <p className="text-wrapper-19">Explore Yale dorms to find the best suite for you.</p>
            <div className="explore-button-3">
              <div className="overlap-group-3">
                <div className="text-wrapper-20">Explore</div>
              </div>
            </div>
            <div className="text-wrapper-21">RoomAdvisor</div>
          </div>
        </div>
        <div className="check-out-our-work">
          <div className="y-cs-products-wrapper">
            <div className="y-cs-products">
              <img className="image" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-4@2x.png" />
              <img className="image-removebg" alt="Image removebg" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-removebg-preview-1@2x.png" />
              <img className="img" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-9@2x.png" />
              <img className="image-2" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-7@2x.png" />
              <img className="image-3" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-5@2x.png" />
              <img className="image-4" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-6@2x.png" />
              <img className="image-5" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-8@2x.png" />
            </div>
          </div>
          <div className="descriptions">
            <div className="text-wrapper-22">Yalies.io</div>
            <div className="text-wrapper-23">YaleButteries</div>
            <div className="text-wrapper-24">CourseTable</div>
            <div className="text-wrapper-25">RoomAdvisor</div>
            <div className="text-wrapper-26">MealMatch</div>
            <div className="text-wrapper-27">ymeets</div>
            <div className="text-wrapper-28">AutoDonation</div>
          </div>
          <div className="text-wrapper-29">Check out our work</div>
        </div>
        <div className="group-6">
          <div className="text-wrapper-30">JOIN THE COMMUNITY</div>
          <p className="program-with-us-at">
            Program with us at
            <br />
            the Yale Computer Society
          </p>
          <div className="group-7">
            <div className="text-wrapper-31">Github</div>
            <div className="overlap-group-4">
              <div className="text-wrapper-32">Instagram</div>
              <img className="image-6" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-11@2x.png" />
              <img className="image-6" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-11@2x.png" />
            </div>
            <div className="text-wrapper-33">YaleConnect</div>
            <img className="image-7" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-12@2x.png" />
            <img className="image-8" alt="Image" src="https://generation-sessions.s3.amazonaws.com/946ecc0b964fb4a6ddf8c088ea18b080/img/image-10@2x.png" />
          </div>
        </div>
        <p className="text-wrapper-34">Yale Computer Society © 2023</p>
      </div>
    </div>
  );
};
