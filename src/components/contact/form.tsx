"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { Button } from "../button";
import { ContactFormSchema, ContactFormSchemaType } from "./types";
import type { ContactForm } from "./types";
import Input from "./input";

const ContactForm = () => {
  const [mailError, setMailError] = useState<string | null>(null);
  const [mailSuccess, setMailSuccess] = useState(false);
  const [mailLoading, setMailLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
  });

  async function handleForm(data: any) {
    console.log("form data", data);

    try {
      setMailLoading(true);
      setMailError(null);
      setMailSuccess(false);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error("Error", response.json());
        throw Error;
      } else {
        console.log("Email was sent successfully.");
        setMailSuccess(true);
        setMailLoading(false);
        reset();
      }
    } catch (err) {
      setMailError("Un problème est survenu. Le mail n'a pas pu être envoyé.");
      setMailLoading(false);
    }
  }

  function handleReset(e: React.FormEvent<ContactForm>) {
    e.currentTarget.reset();
  }

  return (
    <form
      className="flex flex-1 flex-col gap-4 lg:gap-6"
      onSubmit={handleSubmit(handleForm)}
    >
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-8">
        <Input
          register={register}
          name="firstname"
          label="Prénom"
          error={errors.firstname}
          required
        />

        <Input
          register={register}
          name="lastname"
          label="Nom"
          error={errors.lastname}
          required
        />
      </div>

      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-8">
        <Input
          register={register}
          name="email"
          label="Email"
          error={errors.email}
          required
          type="email"
        />

        <Input
          register={register}
          name="username"
          label="ID Discord"
          error={errors.username}
          required={false}
        />
      </div>

      <Input
        register={register}
        name="subject"
        label="Sujet"
        error={errors.subject}
        required
      />

      <label htmlFor="message" className="flex flex-col">
        <span className="font-display text-sm tracking-tight lg:text-base lg:tracking-normal">
          Message <span className="text-navy-500">*</span>
        </span>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className={`rounded-tr-xl rounded-bl-xl bg-neutral-50 border border-neutral-100 p-2 lg:p-4 lg:text-lg ${
            errors.message
              ? "border-papaya-200 outline-papaya-500 focus:outline-papaya-500"
              : "focus:outline-navy-700"
          }`}
          rows={10}
          placeholder="Décrivez-nous votre demande..."
        />
        {errors.message && (
          <span className="px-2 text-sm tracking-tighter text-papaya-400 lg:px-4 lg:text-base lg:tracking-normal">
            {errors.message.message}
          </span>
        )}
      </label>

      <div className="mt-4 flex w-full flex-col gap-4 md:w-fit md:flex-row">
        <Button type="submit">
          {mailLoading
            ? "Envoi en cours..."
            : mailSuccess
            ? "Envoyé!"
            : "Envoyer"}
        </Button>
        <Button type="reset" variant="secondary">
          Réinitialiser
        </Button>
      </div>
      {mailError && <span className="text-papaya-500">{mailError}</span>}
    </form>
  );
};

export default ContactForm;
