import { SectionTitle } from "../components/SectionTitle";
import logo from "../assets/ycs_black.png";
import { ABOUTUS, PROJECTS } from "../data";
import { Fragment } from "react";
import { CardWrapper } from "../components/CardWrapper";

import React from "react";
import "./home.css";
import "../index.css";

export const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-8xl font-extrabold text-center py-10 md:py-3 mt-72 mb-8">Yale Computer Society</h1>
        <p className="text-gray-400 text-3xl mb-52"> Yale's premier software development and computer science student organization</p>
        <p className="text-gray-400 text-4xl" style={{ letterSpacing: "1em" }}>
          v v v
        </p>

        <div className="py-28 flex flex-col items-center w-full">
          <div className="text-center text-white text-3xl font-normal pb-12">Check out our products!</div>
          <div className="w-3/4 h-28 bg-gray-400 rounded-full flex items-center justify-evenly">
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[0].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[1].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[2].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[3].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[4].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[5].image} alt="" />
            <img className="w-20 h-20 rounded-lg" src={PROJECTS[6].image} alt="" />
          </div>
          <div className="w-3/4 h-6 relative mt-4 text-md text-gray-400 text-center flex justify-evenly">
            <div>CourseTable</div>
            <div>Yalies.io</div>
            <div>YaleButteries</div>
            <div>MealMatch</div>
            <div>ymeets</div>
            <div>AutoDonation</div>
            <div>RoomAdvisor</div>
          </div>
        </div>

        <div className="w-3/4 mb-8 text-white text-6xl font-medium">Cultivating a passion for programming</div>
        <div className="w-3/4 text-gray-400 text-3xl mb-20">From development mentorship to hacking nights, we create a community for programmers of all skill levels. </div>

        <div className="columns-2">
          <div className="text-center w-96 h-48 bg-gradient-to-b from-ycs-pink to-ycs-pink/10 rounded-2xl">
            <div className="text-white">dpaoisjdfapoisf</div>
          </div>
          <div className=" w-96 h-48 bg-gradient-to-b from-ycs-pink to-ycs-pink/10 rounded-2xl">
            <div className="text-white">dpaoisjdfapoisf</div>
          </div>
          <div className=" w-96 h-48 bg-gradient-to-b from-ycs-pink to-ycs-pink/10 rounded-2xl">
            <div className="text-white">dpaoisjdfapoisf</div>
          </div>
        </div>

        {/* <div className="overlap-group">
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
      <p className="text-wrapper-34">Yale Computer Society © 2023</p> */}
      </div>
    </div>
  );
};
