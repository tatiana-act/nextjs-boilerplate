import React from 'react';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { tours as toursRu } from '@/data/tours';
import { tours as toursEn } from '@/data/tours.en';
import { faqs as faqsRu } from '@/data/faq';
import { faqs as faqsEn } from '@/data/faq.en';
import { upcomingTours } from '@/data/upcomingTours';
import pastTours from '@/data/RecentTours';
import { TourProgram } from '@/types/tour';
import RecentEventsSection from '@/components/RecentEventsSection';
import HomeClient from '@/components/HomeClient';
import { getAllReviews } from "@/app/actions/readAllFeedbacks";
import ReviewSection from "@/components/ReviewsSection";

const allReviews = await getAllReviews();

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tours = locale === 'en' ? toursEn : toursRu;
  const faqs = locale === 'en' ? faqsEn : faqsRu;

  const allTours: Map<string, TourProgram> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );

  return (
    <main>
      <Hero />
      <HomeClient allTours={allTours} tours={tours} upcomingTours={upcomingTours} locale={locale} />
      <RecentEventsSection pastTours={pastTours} tours={tours} locale={locale} />
      <ReviewSection reviews={allReviews} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}