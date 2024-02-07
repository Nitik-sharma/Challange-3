import React from "react";
import Trip from "./../components/Trip/Trip";
import pic from "../assets/contact.avif";
import Image from "./../components/Trip/Image";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
function Contact() {
  return (
    <div>
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image img={pic} htext={"Contact-us"} />

      <div className=" flex justify-between items-center gap-5 p-5 m-5">
        <div className=" left p-3 flex flex-col items-center justify-center flex-1">
          <div>
            <h1 className=" text-xl md:text-2xl font-bold m-2">Headquarters</h1>
            <p className="p-4 m-4 md:p-10 md:m-9 font-serif text-sm md:text-2xl text-gray-400">
              The Mina Studio 8241 Us 41, Monteagle, TN, 37356
            </p>
          </div>
          <div>
            <h1 className=" text-xl md:text-2xl font-bold m-2">
              Collaborations
            </h1>
            <p className="p-4 m-4 md:p-10 md:m-9 font-serif text-sm md:text-2xl text-gray-400">
              vR each out to collaborate at collab@mina.com
            </p>
          </div>
        </div>
        <div className="right flex-1 items-start">
          <h1 className=" text-start text-sm md:text-3xl font-bold">
            Inquiries
          </h1>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block  text-start tetx-xl font-bold m-3">
                <Label
                  htmlFor="email1"
                  value="Your email"
                  className=" text-xl"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block  text-start tetx-xl font-bold m-3">
                <Label htmlFor="text" value="Your Name" className=" text-xl" />
              </div>
              <TextInput id="text" type="text" required />
            </div>
            <div className="mb-2 block  text-start tetx-xl font-bold m-3">
              <Label
                htmlFor="comment"
                value="Your message"
                className=" text-2xl"
              />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
