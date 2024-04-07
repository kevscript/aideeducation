import { getCollection } from "./get-collection";
import { getGlobal } from "./get-global";
import {
  Association,
  Don,
  Faq,
  Job,
  Member,
  Orientation,
  Partner,
  Social,
  Statistic,
  TeamValue,
  Testimonial,
} from "./types";

export const getFaqs = async () => {
  const faqs = await getCollection<Faq>("faqs");
  return faqs;
};

export const getValeurs = async () => {
  const valeurs = await getCollection<TeamValue>("team-values");
  return valeurs;
};

export const getMembers = async () => {
  const members = await getCollection<Member>("members");
  return members;
};

export const getPartners = async () => {
  const partners = await getCollection<Partner>("partners");
  return partners;
};

export const getOrientations = async () => {
  const orientations = await getCollection<Orientation>("orientations");
  return orientations;
};

export const getJobs = async () => {
  const jobs = await getCollection<Job>("jobs");
  return jobs;
};

export const getStatistics = async () => {
  const statistics = await getCollection<Statistic>("statistics");
  return statistics;
};

export const getTestimonials = async () => {
  const testimonials = await getCollection<Testimonial>("testimonials");
  return testimonials;
};

export const getAssociation = async () => {
  const association = await getGlobal<Association>("association");
  return association;
};

export const getDon = async () => {
  const don = await getGlobal<Don>("dons");
  return don;
};

export const getSocials = async () => {
  const socials = await getCollection<Social>("socials");
  return socials;
};
