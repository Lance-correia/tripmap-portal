
import { useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [annually, setAnnually] = useState(false);
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for occasional travelers",
      price: annually ? 99 : 9.99,
      features: [
        "Access to standard trips",
        "Basic travel insurance",
        "Email support",
        "10% discount on selected trips",
      ],
    },
    {
      name: "Explorer",
      description: "Ideal for regular travelers",
      price: annually ? 199 : 19.99,
      features: [
        "Access to all trips",
        "Premium travel insurance",
        "Priority email & phone support",
        "20% discount on all trips",
        "Free trip cancellation",
      ],
      popular: true,
    },
    {
      name: "Adventurer",
      description: "For serious travel enthusiasts",
      price: annually ? 399 : 39.99,
      features: [
        "Access to all trips + exclusive trips",
        "Comprehensive travel insurance",
        "24/7 dedicated support",
        "30% discount on all trips",
        "Free trip cancellation",
        "Personal travel consultant",
        "Custom trip planning",
      ],
    },
  ];
  
  const faqs = [
    {
      question: "What is included in the trip price?",
      answer:
        "Our trip prices typically include accommodation, guided tours, transportation during the trip, and some meals as specified in each itinerary. Flights to and from the destination are usually not included unless explicitly stated.",
    },
    {
      question: "Can I cancel my trip?",
      answer:
        "Yes, you can cancel your trip subject to our cancellation policy. Cancellations made more than 60 days before departure may be eligible for a full refund excluding the deposit. Cancellations within 60 days of departure will have varying refund amounts depending on timing.",
    },
    {
      question: "How many people are usually in a group?",
      answer:
        "Our group sizes vary depending on the destination and type of trip, but typically range from 8 to 16 people. Small group sizes ensure a more personalized experience and less environmental impact.",
    },
    {
      question: "Are flights included in the package?",
      answer:
        "Flights are generally not included in our package prices unless specifically mentioned. We can help you arrange flights at an additional cost or provide guidance on booking your own flights.",
    },
    {
      question: "What is the recommended budget for extra expenses?",
      answer:
        "We recommend budgeting for additional meals not included in the itinerary, optional activities, souvenirs, and personal expenses. The amount varies by destination, but our trip advisors can provide specific guidance for your chosen trip.",
    },
    {
      question: "Do you offer custom or private trips?",
      answer:
        "Yes, we offer custom and private trip options for individuals, families, or groups who prefer a personalized itinerary. Contact our team for more information and pricing for custom experiences.",
    },
  ];

  return (
    <div>
      <Hero
        title="Trip Pricing"
        subtitle="transparent & flexible"
        description="Choose the plan that fits your travel style with our clear, no-hidden-fees pricing."
        image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      {/* Membership Pricing */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Membership Options"
          subtitle="Join our travel club and enjoy special benefits and discounts on all trips"
        />

        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-slate-100 p-1 rounded-full">
            <button
              onClick={() => setAnnually(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                !annually
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnually(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                annually
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Annually <span className="text-green-500 font-semibold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${
                plan.popular
                  ? "border-gold shadow-lg shadow-gold/10"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="bg-gold text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-slate-500 mt-2">{plan.description}</p>
                <div className="mt-6 mb-8">
                  <p className="text-sm text-slate-500">{annually ? "Annual payment" : "Monthly payment"}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    {!annually && <span className="ml-1 text-slate-500">/mo</span>}
                    {annually && <span className="ml-1 text-slate-500">/year</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "bg-gold hover:bg-amber-600" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to="/contact">Choose Plan</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trip Pricing Table */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Trip Pricing"
            subtitle="Transparent pricing for our most popular destinations"
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Destination</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Group Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Standard Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Member Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-slate-900">Iceland</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-slate-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes Northern Lights viewing, Golden Circle tour, and Blue Lagoon visit.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">7 days</td>
                  <td className="px-6 py-4 text-slate-600">8-12</td>
                  <td className="px-6 py-4 text-slate-600">$1,299</td>
                  <td className="px-6 py-4 font-medium text-green-600">$1,039</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-slate-900">Norway</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-slate-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes fjord cruises, hiking in national parks, and traditional village visits.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">10 days</td>
                  <td className="px-6 py-4 text-slate-600">6-10</td>
                  <td className="px-6 py-4 text-slate-600">$1,599</td>
                  <td className="px-6 py-4 font-medium text-green-600">$1,279</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-slate-900">New Zealand</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-slate-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes Milford Sound, Queenstown adventure activities, and Maori cultural experiences.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">12 days</td>
                  <td className="px-6 py-4 text-slate-600">8-14</td>
                  <td className="px-6 py-4 text-slate-600">$2,399</td>
                  <td className="px-6 py-4 font-medium text-green-600">$1,919</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-slate-900">Japan</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-slate-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes Tokyo, Kyoto, traditional ryokan stays, and bullet train journeys.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">9 days</td>
                  <td className="px-6 py-4 text-slate-600">10-15</td>
                  <td className="px-6 py-4 text-slate-600">$2,099</td>
                  <td className="px-6 py-4 font-medium text-green-600">$1,679</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold mb-4">What's included in the price:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Accommodation
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Local transportation
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Professional guide
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Activities as specified
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Some meals (varies by trip)
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                24/7 support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our pricing and trips"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-slate-900 hover:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Still have questions? Feel free to contact us.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
