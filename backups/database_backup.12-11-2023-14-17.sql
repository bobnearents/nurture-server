--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: provider; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider (id, date_created, needs_review, edit_hash, name, business_name, email, phone, website, address_1, address_2, city, state, zip, overview, role, bio, pronouns, languages_spoken, logo, profile_photo) FROM stdin;
1	2023-12-11 11:49:56.444807	f	\N	Kara Weiland, LCSW	Yellow Bird Counseling and Wellness	kara@yellowbirdwellness.com	8042779649	yellowbirdwellness.com	3126 West Cary Street	(Virtual)	Richmond	VA	23221	Perinatal and maternal counseling/psychotherapy	Therapist	\N	\N	\N	\N	\N
2	2023-12-11 11:49:56.570002	f	\N	Natasha Wade	\N	natashamthornton@gmail.com	\N	\N	\N	\N	Midlothian	VA	23112	I am a registered nurse, certified birth + postpartum doula, certified childbirth educator, trained in breastfeeding support	Doula	\N	\N	\N	\N	\N
3	2023-12-11 11:49:56.704513	f	\N	Portia Chan	Portia Chan, MA, CPRS	portiagracesee@gmail.com	8043938578	\N	10900 Virginia Forest Court 	\N	Glen Allen 	VA	23060	I am a certified peer recovery specialist (CPRS) with training and certificates in PMAD, attachment theory and practice, and developmental psychology (parenting in ethnic and/or minority communities).	\N	\N	\N	\N	\N	\N
4	2023-12-11 11:49:56.707631	f	\N	Kristin Arnoldi	The Circle of Life Doula	kristin.circleoflifedoula@gmail.com	2025778099	\N	PO Box 2674	\N	Mechanicsville	VA	23116	I am a DONA Certified Doula and am in the process of training under INELDA to be a certified End of Life Doula.	To provide doula support to the mother which encompasses supporting the mother physically, emotionally, and informationally. 	\N	\N	\N	\N	\N
5	2023-12-11 11:49:56.709259	f	\N	Amy Thomas, Lcsw	Richmond Creative Counseling	amy@richmondcreativecounseling.com	8045926311	Richmondcreativecounseling.com	1900 Byrd Ave	\N	Richmond 	VA	23230	Outpatient therapist social worker 	Therapist 	\N	\N	\N	\N	\N
6	2023-12-11 11:49:56.710746	f	\N	Sarah Hendricks	DouLife	DouLifeRVA@gmail.com	8044610126	https://douliferva.com/	\N	\N	Richmond	VA	\N	I provide emotional, physical, and educational support for Richmond area parents during life’s biggest adventure.	Birth and Postpartum Doula	\N	\N	\N	\N	\N
7	2023-12-11 11:49:56.712282	f	\N	Jessica Summers	Jessica Summers LCSW LLC	jsummerslcsw@gmail.com	4344666895	www.jsummerslcsw.com	9327 Midlothian Turnpike	Suite 2G	N. Chesterfield	VA	23235	I provide individual therapy services to perinatal/postpartum moms. I also work with bereavement and infertility issues. 	therapist	\N	\N	\N	\N	\N
8	2023-12-11 11:49:56.79638	f	\N	Sara Brockbank 	Sara Brockbank, Life Coach in collaboration with Sol Sanctuary 	sara.brockbank@gmail.com	8048688816	SolSanctuary.org	3403 Sarsen Ct. 	\N	Midlothian	VA	23113	Birth doula and life coach working with families to manage life transitions (eg pregnancy, birth trauma, new parenthood). A life coach will help with your desired outcomes like creating a healthy work life balance, establishing healthy routines, building and strengthening relationships and other areas creating road blocks in life. As a life coach with a back ground in occupational therapy and 8 years experience as a doula, I am able to analyze your current situation, help you to identify your limiting beliefs and other challenges or obstacles and design a plan customized for you, to help you achieve your specific desired outcomes for your life. 	Life Coach and doula 	\N	\N	\N	\N	\N
9	2023-12-11 11:49:56.798721	f	\N	Karla Helbert	Mandala Yoga Therapeutics	karla@karlahelbert.com	8048922782	http://www.karlahelbert.com	3111 Northside Ave	\N	Richmond	VA	23228	LPC in Henrico County, providing support and counseling/therapy for grief, bereavement, traumatic grief, infertility, child death	Therapist, Yoga Therapist	\N	\N	\N	\N	\N
10	2023-12-11 11:49:56.800283	f	\N	Kayley Mayhew 2	Virginia Family Doulas	kayley@cvadoulas.com	4342143034	www.virginiafamilydoulas.com	4411 Goodview St	\N	Lynchburg	VA	24502	Birth, bereavement, and postpartum doula; VBAC Specialist	CEO & Founder; Doula	\N	\N	\N	\N	\N
11	2023-12-11 11:49:56.80146	f	\N	Megan Layaw	Blessed Journey Birth Services	blessedjourneyllc@gmail.com	\N	www.blessedjourneydoula.com	\N	\N	Powhatan	VA	23139	Birth doula support in all trimesters, bereavement doula support in all trimesters, specialized NICU support, and personal fitness training specializing in women's fitness, postpartum recovery, and core and pelvic floor dysfunction	Doula, fitness professional	\N	\N	\N	\N	\N
12	2023-12-11 11:49:56.802393	f	\N	Carlie Copal 	In Your Own Hands LLC 	cmcopal@gmail.com	4344141067	www.inyourownhandsva.com	5090 Scuffletown Rd	\N	Randolph 	VA	23962	Holistic birth & Death Keeper. I'm a certified birth, postpartum and bereavement doula, childbirth educator and placenta processor. 	Owner, Doula	\N	\N	\N	\N	\N
13	2023-12-11 11:49:56.80353	f	\N	Jayla Wilson	Divine Align Integration 	divinealignintegration@gmail.com	8043699702	www.divinealignintegration.org	1901 Huguenot Rd Suite 106	\N	Bon Air	VA	23235	I provide Massage Therapy, Birth Doula, and American Heart Association BLS CPR Courses.	Owner/ worker	\N	\N	\N	\N	\N
14	2023-12-11 11:49:56.804645	f	\N	JamiQuan Rudd	Brunswick AgNCulture	doula@jamiquan.cim	8049993368	https://linktr.ee/jamiquans	3807 Larchmont Ln	\N	Richmond 	VA	23224	Full Spectrum Doula  Postpartum Support  Lactation / Baby Feeding Support  Labor & Delivery Support  Blended Family Support  New Baby After a Break  Marriage Planning  Clinical Social Worker+MSW   Mental Health & Wellness  Community Building  	Clinical Social Worker, Full Spectrum Doula, Lactation Support	\N	\N	\N	\N	\N
15	2023-12-11 11:49:56.806592	f	\N	Cherie Walkley	Speaking of Milk, LLC	cherie@speakingofmilk.com	8178803433	speakingofmilk.com	\N	\N	Ashland	VA	23005	In home lactation support from prenatal through weaning. I provide comprehensive evaluations and individualized treatment plans. As a dually certified provider (SLP/IBCLC) I have extensive training in infant oral function and can provide pre/post tongue/lip tie release therapy.	Speech-language pathologist/board certified lactation consultant 	\N	\N	\N	\N	\N
16	2023-12-11 11:49:56.807668	f	\N	Liz Snead	Richmond Henrico Health District - WIC	lizbeth.snead@vdh.virginia.gov	804-205-3725	www.rchd.com	400 E. Cary St.	\N	Richmond	VA	23219	Provide WIC services - enrollment, nutrition education, food benefit issuance; breastfeeding education, support and counseling.	WIC Coordinator	\N	\N	\N	\N	\N
17	2023-12-11 11:49:56.808713	f	\N	Elizabeth Rowe	Henrico WIC Program	elizabeth.rowe@vdh.virginia.gov	8045011610	\N	7740 Shrader Rd Ste B	\N	Henrico	VA	23228	Breastfeeding benefits/baby behavior/latch, etc	\N	\N	\N	\N	\N	\N
18	2023-12-11 11:49:56.809276	f	\N	Maggie Todd	WIC Richmond City Health District/ VDH	margaret.todd@vdh.virginia.gov	804/482/5450	https://www.vdh.virginia.gov/wic/about/	400 E Cary	\N	Richmond	VA	23219	Breastfeeding counselling, referrals, breastfeeding supplies	Peer Breastfeeding Counselor	\N	\N	\N	\N	\N
19	2023-12-11 11:49:56.810491	f	\N	Parker Bray	Lyra Parker LLC	lyra.parkerbray@gmail.com	5405536198	www.lyraparker.com	\N	\N	Richmond 	VA	23221	Full Spectrum Doula Services: As a birth doula, I accompany people in labor to help ensure a safe and satisfying birth experience. Within my scope of practice, I draw on my professional training, knowledge and experiences to provide physical, emotional and informational support prenatally, during labor and postpartum to pregnant people and partners. I can provide reassurance and perspective to you and your partner, make suggestions for labor progress and help with relaxation, massage, positioning, and other techniques for comfort.  Therapeutic bodywork & movement education focusing on pain relief, stress management and reproductive + digestive wellness.  Certified Lactation Counselor: As a CLC I am trained and competent in cheast/breastfeeding and human lactation support, including assessing the latching and feeding process, providing corrective interventions, counseling parents, understanding and applying knowledge of milk production including in special circumstances and other commonly encountered situations.	LMT & Doula	\N	\N	\N	\N	\N
25	2023-12-11 11:49:56.870599	f	\N	Carly Hanchin 	\N	hanchincs@gmail.com	8043197782	\N	\N	\N	Richmond	VA	23222	Certified Lactation Counselor: breast/chest feeding support	Preschool teacher	\N	\N	\N	\N	\N
20	2023-12-11 11:49:56.811816	f	\N	Ginnie Kurtz	Soeur Doula	soeurdoula@gmail.com	\N	www.soeurdoula.com	517 Tuckahoe Blvd	\N	Richmond	VA	23226	Birth Doula Services--support throughout pregnancy, labor, delivery, and a postpartum meeting	Birth Doula	\N	\N	\N	\N	\N
22	2023-12-11 11:49:56.813794	f	\N	Linda Chermsode	Best Beginnings LLC	\N	804-323-2229	\N	\N	\N	North Chesterfield	VA	23235	Breastfeeding consultations and support for breastfeeding families.	Lactation Consultant	\N	\N	\N	\N	\N
48	2023-12-11 11:49:56.91697	f	\N	Stephanie Lee	VCU Health Dept OBGYN	stephanie.lee@vcuhealth.org	\N	www.vcumom.com	1250 E. Marshall St. 	\N	Richmond	VA	23219	I am an academic OBGYN at VCU Health	Physician, OBGYN	\N	\N	\N	\N	\N
52	2023-12-11 11:49:56.921264	f	\N	Kathy Stewart	Full Circle Childbirth Consultants Inc	kmspnp@aol.com	804-747-0761	www.fullcirclechildbirthconsultants.com	2014 Skipwith Rd.	\N	Richmond	VA	23294	I provide birth and postpartum doula services.  I also a birth and postpartum doula trainer.	Pediatric nurse practitioner and birth/pp doula trainer	\N	\N	\N	\N	\N
65	2023-12-11 11:49:56.95452	f	\N	Leann Ragland	\N	leann.ragland@gmail.com	5404555333	\N	\N	\N	Richmond	VA	23231	Birth doula	Birth doula	\N	\N	\N	\N	\N
49	2023-12-11 11:49:56.917804	f	\N	Brianna Burton	The Doula’s Garden	thedoulasgarden@gmail.com	\N	\N	\N	\N	\N	\N	\N	Perinatal doula support and childbirth education 	Doula and Childbirth Educator	\N	\N	\N	\N	\N
70	2023-12-11 11:49:56.961752	f	\N	Clare Heaps	Heaps of Love LLC	lactation@heapsoflove.com	3123502106	www.heapsoflove.com	\N	\N	Midlothian	VA	23114	Lactation support for all stages of your journey. Whether you’re expecting your first child or you’re a seasoned pro, each breastfeeding/chestfeeding journey is unique. I’m here to help you have a great feeding relationship with your child, whatever your goals may be.	Lactation Counselor	\N	\N	\N	\N	\N
72	2023-12-11 11:49:56.963575	f	\N	Rachel Featherstone, WHNP-BC, MSN, PMH-C	Eucalyptus Health	info@eucalyptushealthcare.com	208-779-7019	www.eucalyptushealthcare.com	8010 Nicewood Road	\N	Glen Allen	VA	23060	I'm a nurse practitioner offering holistic mental health super for parents and partners, through my private practice, Eucalyptus Health. I am physically located in Richmond, but unable to work independently as a nurse practitioner here, so I operate in the state of Idaho, where the laws are different.	Owner and Nurse Practitioner	\N	\N	\N	\N	\N
92	2023-12-11 11:49:57.002748	f	\N	Rachel North	Rachel North, LCSW, LLC	rachelnorthlcsw@gmail.com	804316-9207	https://www.psychologytoday.com/us/therapists/rachel-e-north-richmond-va/451485	1806 Summit Avenue	Ste 300, Stop297	Richmond	VA	23230	I am a Licensed Clinical Social Worker and have a certification in Perinatal Mental Health through Postpartum Support International (PMH-C).  I am also certified in EMDR and use this modality in treating trauma including birth trauma and perinatal loss.  My solo practice focus is Perinatal Mental Health and I aim to keep at least 90% of my client base within this population. 	Psychotherapist, Owner	\N	\N	\N	\N	\N
96	2023-12-11 11:49:57.008321	f	\N	Allison Nichols	VCU Health 	allison.nichols@vcuhealth.org	804-628-5395	n/a	1000 E. Broad St.	\N	Richmond	VA	23219	I provide feeding and swallowing therapy for infants, including breastfeeding assistance.  I work closely with a multi-disciplinary medical team which includes pediatricians, nutrition, GI, pulmonary, and ENT to optimize feeding outcomes relative to the pt's broader medical picture.	Speech Language Pathologist	\N	\N	\N	\N	\N
102	2023-12-11 11:49:57.015207	f	\N	Valerie Coleman	VCUHS	valerie.coleman@vcuhealth.org	804 828-4634	www.vcuhealth.org	1250 East Marshal street  	\N	Richmond	VA	23298	We  offer  prenatal childbirth classes including  childbirth preparation, Newborn parenting, breastfeeding, Infant CPR, Grandparenting, Infant Massage, Healthy Beginnings ( early prenatal class with tour of facility) Postpartum  Breastfeeding support, Post partum Returning to work and breastfeeding. We have online  class for  prenatal patients until in person classes can be resumed.  We have lactation services  7 days a week inpatient and 5 days a week  in outpatient  lactation clinic, including a warm line. We  have a pp  support  group for  mental health, ( depression) We collaborate with WIC and the VDH , CHW  and the Latinex patient  population to provide  access and  information.	program director  prenatal eduction and lactation services	\N	\N	\N	\N	\N
104	2023-12-11 11:49:57.017052	f	\N	Cara Meyer	HCA Chippenham Hospital	cara.meyer@hcahealthcare.com	804-483-2253	\N	7101 Jahnke Rd	\N	Richmond 	VA	23225	Hospital based LC at Chippenham Hospital- assist with latch, supply issues, obtaining pump for home use	lactation consultant	\N	\N	\N	\N	\N
106	2023-12-11 11:49:57.019001	f	\N	Emily Bruno	MyBirth	emily.mybirthrva@gmail.com	8043685488	www.mybirthrva.com	1726 Altamont Ave Suite 2	\N	Richmond	VA	23230	Birth Doula, Childbirth Educator	Birth Doula	\N	\N	\N	\N	\N
21	2023-12-11 11:49:56.812891	f	\N	kendall pacoe	Henrico Doctors Hospital-Perinatal Nurse Navigator	\N	\N	https://hcavirginia.com/specialties/labor-and-delivery?location=henrico-doctors	\N	\N	\N	VA	\N	I am the high risk perinatal nurse navigator at Henrico Doctors Hospital! I help coordinate care, provide resources, personal touch points with the patients to make sure they have the safest, best delivery here at Henrico Doctors Hospital.	Perinatal Nurse Navigator	\N	\N	\N	\N	\N
23	2023-12-11 11:49:56.814519	f	\N	Elaine Allen 	Masa Doula Services 	elainetroyallen@gmail.com	8043876041	\N	802 Timken Drive 	\N	Henrico	VA	23229	I primarily provide birth support for patients laboring in hospitals or birth centers. 	Birth Doula	\N	\N	\N	\N	\N
26	2023-12-11 11:49:56.892748	f	\N	Priscilla Anne	Happy Latch LLC	happylatchllc@yahoo.com	8043681668	Www.happylatch.com	\N	\N	\N	VA	\N	Lactation Consultations	Lactation Consultant 	\N	\N	\N	\N	\N
28	2023-12-11 11:49:56.895464	f	\N	Latonya Williams-West	LatonyaDeshelle, LLC 	info@latonyadeshelle.com	8049868996	\N	6401 Trailview Cir Apt 403	\N	Chester	VA	23831	Im a Birth and Postpartum Doula , Lacatation Educator and Community Health Worker/Community Doula and I provide education and labor support and also provide educate and support for mothers who are breastfeeding.  As a community doula and community health worker I provide resources and support for mom who live is low income areas and mom who are homeless and need assistance	Community Doula/Community Health Worker	\N	\N	\N	\N	\N
30	2023-12-11 11:49:56.898095	f	\N	Julieanne Combest	Temple Healing Arts	ritual.rva@gmail.com	7203250241	Templehealingarts.org	9019 Forest Hill Ave	Suite 1A	Richmond	VA	23224	I am a doula as well as an LMT. I practice prenatal massage, postpartum massage, and fertility massage in the form of The Arvigo Techniques of Mayan Abdominal Therapy. 	Doula, Massage Therapist, Coach	\N	\N	\N	\N	\N
33	2023-12-11 11:49:56.90128	f	\N	Sarah Newton	All Things Doula, LLC	allthingsdoula@yahoo.com	417-942-8974	www.allthingsdoula.com	\N	5033 Tara Dr. 	Fredericksburg	VA	22407	Physical, mental, emotional support for a woman and her family before, during, and after pregnancy! 	Birth and Postpartum Doula	\N	\N	\N	\N	\N
36	2023-12-11 11:49:56.904318	f	\N	Heidi Blanton-Pohl	Heart of Virginia Birth Services/MyBirth RVA	heartofvadoula@gmail.com	4343903888	www.heartofvadoula.com	2801 Montrose Avenue	APT A	Richmond City	VA	23222	Birth & Postpartum Doula serving the Richmond area. Also a birth photographer and newborn educator. 	Birth Doula	\N	\N	\N	\N	\N
43	2023-12-11 11:49:56.911783	f	\N	Leah Ross	Affirm Foundation Birth Doula Services	affirmfoundationbirthdoula@gmail.com	2054991558	https://www.affirmfoundationdoula.com/	2703 Bowles Lane	\N	Glen Allen 	VA	23060	Birth doula (prenatal, birth support) baby sleep training, postpartum health and fitness 	Doula, birth and postpartum support 	\N	\N	\N	\N	\N
73	2023-12-11 11:49:56.964986	f	\N	Jess Gray 	Richmond Doula Project	jess@doulaprojectrva.org	8042129685	https://doulaprojectrva.org/	\N	\N	Richmond	VA	\N	I am a full-spectrum doula with RDP. I focus on birth work but have had some PP experience 	Social Media and Fundraising Chair for RDP. Administrative Assistant for my job job. 	\N	\N	\N	\N	\N
76	2023-12-11 11:49:56.968261	f	\N	Stephanie Coleman 	HoneyBee Postpartum Support 	Stephanie@honeybeepostpartum.com	8044768878	Honeybeepostpartum.com	1916 Hungary Oak CT 	\N	Henrico 	VA	23228	In home and virtual Postpartum support including light housework, assistance with nutrition for baby and birthing parent, and providing resources as needed.	Postpartum Doula 	\N	\N	\N	\N	\N
80	2023-12-11 11:49:56.972425	f	\N	NyTasha Stevens, CLC	Soothe First	info@rvahypnobirth.com	8043199902	www.SootheFirst.com	2902 Winchester Street 	\N	Richmond 	VA	23231	CLC, Full Spectrum Doula, HypnoBirthing Practitioner, Postpartum Doula Agency	Doula	\N	\N	\N	\N	\N
110	2023-12-11 11:49:57.024165	f	\N	Hunter Moore	The Mindful Birth	themindfulbirth@gmail.com	8043628176	Themindfulbirth.com	\N	\N	North Chesterfield	VA	23235	Certified Birth Doula, Certified Lactation Counselor, Childbirth Educator	Certified Birth Doula	\N	\N	\N	\N	\N
114	2023-12-11 11:49:57.045704	f	\N	Robin Allman	Pediatric Associates of Richmond, Inc.	n/a	804-282-4205	https://parpeds.com/	4300 Pouncey Tract Rd., Glen Allen 23060	8485 Bell Creek Rd, Suite B-3, Mechanicsville, VA 23116	\N	VA	\N	Newborn assessments and lactation support in offices at Short Pump and Mechanicsville, through four experienced IBCLCs.	Pediatric Nurse Practitioner and IBCLC	\N	\N	\N	\N	\N
116	2023-12-11 11:49:57.047244	f	\N	Tracey Wingold	Tracey Wingold, LCSW, LLC	traceywingold@itherapymail.com	8043169694	Www.itherapy.com/tracey-wingold	Online	\N	\N	VA	\N	Online mental health services, via secure video.  Treating issues related perinatal mood and anxiety disorders, perinatal loss, birth trauma, challenges of parenting in all stages. 	Mental health therapist	\N	\N	\N	\N	\N
24	2023-12-11 11:49:56.843337	f	\N	Tricia Flanagan 	New Life Midwifery, LLC	newlifemidwiferyandwellness@gmail.com	8044046221	newlifemidwiferyandwellness.com	7406 Woodman Rd	\N	Henrico 	VA	23024	Latch assessment, slow weight gain, supply issues, going back work/school , pumping	Certified Lactation Counselor 	\N	\N	\N	\N	\N
29	2023-12-11 11:49:56.896584	f	\N	Tiera Trapp	Birthing with T,llc	bwtt2020@gmail.com	4437623073	Www.birthingwithT.com	225 Plazaview rd	Apt A 	Richmond	VA	23224	Full spectrum doula , birth support and breastfeeding support 	Medical assistant 	\N	\N	\N	\N	\N
31	2023-12-11 11:49:56.899317	f	\N	Hallie Lifson OTR/L	DuraMater Therapy	\N	8045136797	www.duramatertherapy.com	3821 Gaskins Road 	\N	Richmond	VA	23233	DuraMater Therapy holds space for women preparing for birth, to process their birth stories and release trauma from unexpected birth outcomes. Hallie Lifson is an Occupational Therapist and former childbirth educator and doula. Eight one hour sessions are included in each package and are highly individualized to  help you find acceptance and peace.  HSA cards and FSA cards accepted. 	Therapist	\N	\N	\N	\N	\N
35	2023-12-11 11:49:56.903207	f	\N	Sarah Cole	Sage Mama	sagemamarva@gmail.com	\N	SageMamaRVA.com	\N	\N	\N	\N	\N	Sarah Cole is a birth doula and Certified Breastfeeding Specialist providing compassionate non judgmental birth and breastfeeding support for families in the Richmond area.	Doula, Certified Breastfeeding Specialist	\N	\N	\N	\N	\N
38	2023-12-11 11:49:56.906542	f	\N	Cecelia Peace	\N	cecelia.peace14@gmail.com	8044414115	\N	6855 Pimlico Drive	\N	Mechanicsville 	VA	23111	I am a birth doula and offer childbirth education, lactation prep/consultation, and postpartum help. 	Birth Doula	\N	\N	\N	\N	\N
50	2023-12-11 11:49:56.919046	f	\N	Sheena Jeffers	Living Real WELL, LLC.	sheena@reachingwell.com	7576219469	www.reachingwell.com	7630 Granite Hall Ave	\N	Richmond	VA	23225	I am a Birth Doula (trained by toLabor), and I am a Certified Wellness Life Coach helping mothers during pregnancy and after birth. 	Birth Doula & Wellness Coach	\N	\N	\N	\N	\N
67	2023-12-11 11:49:56.957068	f	\N	Kristi ramey	Richmond Birth and Baby	Kristi@RichmondBirthAndBaby.com	8043930094	https://www.richmondbirthandbaby.com/	1900 Skipwith Rd.	\N	Henrico	VA	23229	I own a Birth and Postpartum agency, have been a lactation consultant for many years. Sitting for the IBCLC exam in Sept 2021	owner, doula, support group coordinator, lactation 	\N	\N	\N	\N	\N
107	2023-12-11 11:49:57.020375	f	\N	Heather McLees-Frazier	Open Arms Birth Collective, LLC	hmfdoula@gmail.com	(804) 833-4474	openarmsbc.com	8404 Chamerlayne Ave. 	\N	Richmond	VA	23227	Birth and bereavement doula services, some limited postpartum doula services.	Birth doula	\N	\N	\N	\N	\N
115	2023-12-11 11:49:57.046529	f	\N	Jennifer Sestak	Strength and Dignity Birth Services	jennifer@strengthanddignitybirth.com	8044371492	Www.strengthanddignitybirth.com	8339 Wetherden Dr.	\N	Mechanicsville 	VA	23111	Birth doula/hypnodoula 	Birth Doula	\N	\N	\N	\N	\N
27	2023-12-11 11:49:56.894267	f	\N	Amy Washington	Mom for hire 	amy@momforhire.net	8049090339	Www.momforhire.net	1005 fifth Ave 	\N	Farmville 	VA	23901	Postpartum and lactation support. 24/7 globally or local 	Doula	\N	\N	\N	\N	\N
32	2023-12-11 11:49:56.900141	f	\N	Courtney Nester	\N	courtneylnester@gmail.com	6417992444	\N	\N	\N	\N	VA	23150	Trauma informed Labor and Delivery RN/ Spinning babies trained/ Trained Labor/Birth/ Postpartum Doula 	Labor and Delivery RN	\N	\N	\N	\N	\N
34	2023-12-11 11:49:56.902184	f	\N	Kate Pelais	Doula Kate RVA	doulakaterva@gmail.com	8043392197	www.doulakaterva.com	2500 Kettlewell Court 	\N	Midlothian 	VA	23113	I provide emotional and physical support to mothers during pregnancy and labor. 	Homemaker 	\N	\N	\N	\N	\N
39	2023-12-11 11:49:56.907555	f	\N	Dr. Michele Davidson 	Chesapeake Bay Psychiatry 	michele@chesapeakebaypsych.com	7579929600	Www.chesapeakebaypsych.com	1545 Crossways Blvd # 250 	\N	Chesapeake 	VA	23320	Perinatal mental health medication management, counseling, and coaching. 	Psychiatric Mental Health Nurse Practitioner 	\N	\N	\N	\N	\N
47	2023-12-11 11:49:56.915845	f	\N	Alina Betts	A New Birth Story	anewbirthstory@gmail.com	8046905681	Anewbirthstory.com	\N	\N	Henrico	VA	23233	As a professional birth doula, I provide physical, emotional, and educational support to birthing people and their partners or family to help make their birth story an empowering one. 	Birth Doula	\N	\N	\N	\N	\N
53	2023-12-11 11:49:56.922245	f	\N	Fallon Regan	Sister Soul Wellness	fallon@doulaprojectrva.org	7326460032	https://msha.ke/sistersoulwellness/	1006 Robmont Dr	\N	North Chesterfield	VA	23236	Professional Birth Doula, Professional Postpartum Doula, Certified Lactation Counselor	Professional Doula & Certified Lactation Counselor 	\N	\N	\N	\N	\N
69	2023-12-11 11:49:56.960944	f	\N	Laurel Otey	Layered Living	laurel@layeredlivinglife.com	703-835-2378	www.layeredlivinglife.com	7325 Rouseaux Place	\N	North Chesterfield	VA	23234	I work as an Infant and Family Educator through my holistic wellness practice, Layered Living. I offer:  - New Baby Course for expectant parents: 8 hours of content over 6 classes, which cover everything expectant parents need to know about preparing for birth, labor and childbirth, c-section delivery, newborn procedures, postpartum recovery, common medical problems that occur postpartum for mothers, feeding baby (breast and bottle), common feeding problems for baby and how to solve them, and caring for baby.  - Starting Solids Class: 1-hour educational class on when and how to start solids with baby. We cover feeding methods, best first foods, how to prevent iron deficiency, weaning timeline, safety concerns, signs of potential food reactions, and how to prevent picky eaters.  - Family Consultations for parents with infants, toddlers, or older children: 1-hour sessions are tailored to the individual concerns of that family. All recommendations are researched-based and include referrals to local/online providers. Common concerns include infant feeding problems, potential food allergies, infant/toddler/child sleep problems, chronic congestion, picky eaters, how to adopt a healthy family routine, etc.	Owner & certified Health Coach	\N	\N	\N	\N	\N
82	2023-12-11 11:49:56.975077	f	\N	Bailey Robinson	MyBirth LLC	\N	8042822608	Www.mybirthRVA.com	1426 Altamont Ave	Suite 2	Richmond	VA	23230	Birth doula: prenatal education and support, in person birth support and postpartum support for healing, emotional support and breastfeeding.   Lactation Specialist: different packages available, able to assist with latch, positioning, pumping schedule, weighted feeds, and more.	Birth doula, childbirth educator and lactation specialist	\N	\N	\N	\N	\N
45	2023-12-11 11:49:56.913892	f	\N	Sharon Filegar	Bon Secours Mercy Health St. Mary's Hospital	sharon_filegar@bshsi.org	8042183301	\N	5801 Bremo Road	\N	Richmond	VA	23226	In hospital Lactation Consultant; provide assistance and education with breastfeeding/pumping. Also provide support as a breastfeeding support group facilitator	Lactation Consultant in hospital setting	\N	\N	\N	\N	\N
108	2023-12-11 11:49:57.02156	f	\N	Heather Kay	Clearwater Counseling & Wellness Services LLC	clearwatercounselingrva@gmail.com	\N	Clearwatercounselingrva.com	530 E Main St	Suite 910	Richmond 	VA	23219	Psychologist for adults.  I provide individual therapy for folks encountering challenges in their process to form a family and provide extra support during TTC, pregnancy, and postpartum.  I work with many different types of folks, including LGBTQ families, folks with physical and/or other disabilities, and folks with pre-existing mental health problems.  I can work with moms, dads, caregivers, birth/adoptive families, surrogates, etc	Licensed Clinical Psychologist 	\N	\N	\N	\N	\N
112	2023-12-11 11:49:57.043603	f	\N	Nancy Raines	Johnston Willis Hospital	nancy.raines@hcahealthcare.com	804-483-6342	www.johnstonwillismed.com	1401 Johnston Willis Dr	\N	Richmond	VA	23113	Hands on Lactation Support for hospital inpatients  Prenatal classes  Phone/email support for lactation concerns	lactation consultant	\N	\N	\N	\N	\N
37	2023-12-11 11:49:56.905526	f	\N	Rachel Pfab	Bon Secours St. Francis Medical Center	rachel_pfab@bshsi.org	804-594-3267	\N	13700 St. Francis Blvd.	\N	Midlothian	VA	23114	Inpatient lactation care.  Warm Line for breastfeeding advice.	Lactation Coordinator	\N	\N	\N	\N	\N
41	2023-12-11 11:49:56.9096	f	\N	Asia O'Neal	The Caring Doula, RVA	caringdoularva@gmail.com	\N	\N	\N	\N	Midlothian	VA	\N	In home emotional, physical and educational support and assistance during the postpartum period. Postpartum and newborn care.	Postpartum Doula	\N	\N	\N	\N	\N
44	2023-12-11 11:49:56.912725	f	\N	Dr. Caitlin Martin	OB MOTIVATE at VCU Health 	OBMotivate@vcuhealth.org	(804)-827-9725	https://www.vcuhealth.org/services/womens-health/our-services/ob-motivate-clinic	Nelson Clinic: 401 N 11th St. 6th Floor	\N	Richmond	VA	23298	OB MOTIVATE at VCU Health is the only program in central Virginia that provides an interdisciplinary, integrated approach to women with substance use disorders. At the OB MOTIVATE clinic, we bring tailored, personalized care to you during one visit. We coordinate services during your visit, at one location. We help any woman with a substance use disorder – whether you are pregnant or not. You do not have to be pregnant to start care with us. If you start treatment during your pregnancy, you can continue to see us after you have your baby.    Some services are available as video, or telehealth, appointments. Our services are similar to a women’s health clinic or pregnancy clinic, with special services for substance use disorders. They include:    -Treatment for substance use disorders, including medications like buprenorphine/naloxone (Suboxone) for opioid use disorder and naltrexone (Vivitrol) for alcohol use disorder  -Reproductive and sexual health care  -Recovery support during pregnancy, labor and delivery, and postpartum (obstetric care)  -Annual well-woman exams, including pap smear, birth control, pregnancy counseling, cervical cancer screening and tests (gynecologic care)  -Pediatric consultation for newborn care  -Lactation consultation and breastfeeding education  -Behavioral health counseling and individual and support groups  -Referrals to other services, including those for hepatitis C treatment, social work, domestic violence and primary care.	Physician and Director of OB MOTIVATE at VCU Health	\N	\N	\N	\N	\N
56	2023-12-11 11:49:56.941967	f	\N	Margie Muth	RVA Lactation Consultant, LLC	rvalactation@gmail.com	7039731473	\N	1120 West Avenue 	\N	Richmond 	VA	23220	I am an RN IBCLC with a private practice and do home visits. I have special interest and expertise working with premature and former NICU infants	Lactation Consultant 	\N	\N	\N	\N	\N
59	2023-12-11 11:49:56.946551	f	\N	Caitlin Catts	Clary and Crowned Birth	caitlinwalshcatts@gmail.com	5712162531	https://claryandcrownedbirth.squarespace.com/claryandcrownedbirthblog	3910 Brook Rd.	\N	Richmond	VA	23227	Clary and Crowned Birth is my company servicing Richmond families as a birth and postpartum doula	Founder and executor 	\N	\N	\N	\N	\N
74	2023-12-11 11:49:56.966321	f	\N	Courtney Jameson	Jameson Therapeutic Massage	jamesontherapeutic@gmail.com	(804) 362-6212	jamesontherapeutic.com	1726 Altamont Ave	Suite 2	Richmond	VA	23230	Massage specialized for during pregnancy and massage for after pregnancy as well	Business owner/licensed massage therapist	\N	\N	\N	\N	\N
77	2023-12-11 11:49:56.969373	f	\N	Elizabeth (Beth) McCafferty	VCU Health, Childrens's Hospital of Richmond at VCU	elizabeth.mccafferty@vcuhealth.org	804-628-5395	\N	1000 E Broad Street	3rd floor, Pod B	Richmond	VA	23219	As a Speech language Pathologist and Certified Lactation Counselor, I provide breastfeeding/infant feeding evaluation and therapy services. I serve children who are soley having feeding issues as well as children with multiple medical conditions such as GI discomfort, neurological conditions, ENT difficulties, and lung disease. I participate in a collaborative team setting to promote safe and quality feeding experiences for infants and their families. 	Speech language Pathologist	\N	\N	\N	\N	\N
84	2023-12-11 11:49:56.994048	f	\N	Anna Glezer	Women's Wellness Psychiatry	drglezer@annaglezermd.com	6502753939	www.annaglezermd.com	1290 Howard Ave	Suite 325	Burlingame	CA	94010	Perinatal mental health psychiatric and psychological services with an integrative approach that includes prescription and non-prescription options, various psychotherapies, acupuncture, nutrition, and more. 	Psychiatrist	\N	\N	\N	\N	\N
87	2023-12-11 11:49:56.997695	f	\N	Claire Prendergast	MyBirth LLC	cprendergast.mybirthrva@gmail.com	2057060459	www.mybirthrva.com	1726 Altamont Ave #2	Apt 2	Richmond	VA	23230	*In-home support with newborn care, breastfeeding, recovery from childbirth  *Education from evidence-based up-to-date resources  *Connection to community and health resources  *Assistance with household tasks that facilitate rest and bonding for parents and new baby	Postpartum Doula	\N	\N	\N	\N	\N
91	2023-12-11 11:49:57.001569	f	\N	Valencia Hargrove 	Women’s Wellness Center Of Virginia, LLC	wellnesscenterva@gmail.com	8047097044	https://wellnesscenterofvirginia.com	7400 Beaufont Springs Dr	Suite 300	Richmond 	VA	23225	I provided individual therapy to women experiencing perinatal mood and anxiety disorders (PMAD’s). I also provide therapy for women going through IVF, or have reproductive health concerns via Telehealth.	Owner/psychotherapist 	\N	\N	\N	\N	\N
97	2023-12-11 11:49:57.009536	f	\N	Gauri Gulati	Children’s Hospital of Richmond at VCU	gauri.gulati@vcuhealth.org	8048282467	https://www.chrichmond.org/services/primary-care/lactation/lactation-services	1000 East Broad st	\N	Richmond	VA	\N	We are a comprehensive outpatient breastfeeding medicine clinic and provide care for both mother and infant for any lactation difficulties or concerns. 	Pediatrician and IBCLC	\N	\N	\N	\N	\N
40	2023-12-11 11:49:56.908628	f	\N	Kidder Connell	A Brighter Birth; Kidder Connell: Doula & Artist	hello@kidderconnell.com	804-339-8182	abrighterbirth.com	12 N Arthur Ashe Blvd	\N	Richmond	VA	23220	As a Birth Doula I companion with pregnant people and families and aide them on their journey through pregnancy, labor, delivery and their postpartum season. I offer education on nutrition and birth and support laboring people in both pain management and spiritual wellness in labor and the days leading up to it. 	Birth Doula	\N	\N	\N	\N	\N
42	2023-12-11 11:49:56.910414	f	\N	Kimberly McNally, DNP, CNM, IBCLC	Rewilding Midwifery & Wellness, PLLC	kim@rewildingmidwifery.com	8043819709	Www.rewildingmidwifery.com	1909 Huguenot Rd	Suite 201	Richmond 	VA	23235	Full scope lactation services as an IBCLC, focus on healthy full term and late preterm babies (and their parents) during the first year of life.	Owner, nurse-midwife 	\N	\N	\N	\N	\N
46	2023-12-11 11:49:56.914944	f	\N	Keisha Graham	\N	keisha.mybirthrva@gmail.com	8045645008	https://www.facebook.com/KeishaDoesWork	\N	\N	\N	VA	\N	Birth Doula & Lactation Support	Birth Doula	\N	\N	\N	\N	\N
51	2023-12-11 11:49:56.920512	f	\N	Dr. Cara Corbelli, BS, DC	Renew Chiropractic	drcara@renewchiropracticrva.com	8044199290	www.renewchiropracticrva.com	1520 Huguenot Rd	Suite 113	Midlothian	VA	23113	We provide specific and neurological based chiropractic care to those throughout the preconception and perinatal period as well as to the pediatric population to help allow the infant/child to develop to the best of their ability.	Chiropractor/Owner	\N	\N	\N	\N	\N
55	2023-12-11 11:49:56.924969	f	\N	Rachel Brown	MyBirth RVA	rbrown.mybirthrva@gmail.com	202-836-2800	https://mybirthrva.com	1726 Altamont Ave #2	\N	Richmond	VA	23230	I provide nonclinical prenatal, labor and birth, and postpartum care. Before birth, I help organize birth plans, educate and inform clients on birthing options, and answer any questions. I teach breathing techniques, position changes, and comfort measures to use during labor. I am fully present for the entirety of the birth, helping navigate the challenges of labor while tending to the needs of both the birthing person and their partner. Postpartum, I help establish bonding, breastfeeding, and soothing practices for babies. 	Birth Doula	\N	\N	\N	\N	\N
57	2023-12-11 11:49:56.943891	f	\N	Nikiya Ellis	The Diverse Doula	nikiya79@hotmail.com	8046835106	Www.thediversedoula.com	3219 North Ave 	\N	Richmond 	VA	23223	Doula Services, Childbirth education , postpartum services, placenta encapsulation 	Doula, Owner 	\N	\N	\N	\N	\N
61	2023-12-11 11:49:56.949238	f	\N	Ebony Allen	Naturally Your Doula	naturallyyourdoula@gmail.com	8046768377	\N	5421 Stone Lane	\N	Richmond 	VA	23227	Prenatal/Birth/Postpartum Doula/Lactation Education and Support	Doula	\N	\N	\N	\N	\N
62	2023-12-11 11:49:56.950685	f	\N	Lisa Ripp	Children's Hospital of Richmond at VCU	lisa.ripp@vcuhealth.org	804- 402-2213	\N	1000 East Broad Street 	4th Floor Pod H	Richmond 	VA	23113	Lactation consultant IBCLC at Children's Hospital of RIchmond	RN Program Coordinator, CHOR Lactation 	\N	\N	\N	\N	\N
63	2023-12-11 11:49:56.952169	f	\N	Laura Haskin CPNP IBCLC	Children's Hospital of Richmond	laura.haskin@vcuhealth.org	8048282467	www.chrichmond.org	1000 E. Broad Street	\N	Richmond	VA	23298	able to provide lactation support and pediatric care in a medical home setting.  	Pediatric Nurse Practitioner	\N	\N	\N	\N	\N
66	2023-12-11 11:49:56.95558	f	\N	Kenda Sutton-EL	Birth In Color RVA	birthincolorrvafoundation@gmail.com	804-316-9867	http://www.birthincolorrva.org	13805 village mill drive suite 201	\N	midlothian	VA	23114	Full Spectrum doula and Certified lactation counselor	Executive Director	\N	\N	\N	\N	\N
81	2023-12-11 11:49:56.974014	f	\N	Elise Benoit	MyBirth	ebenoit.mybirthrva@gmail.com	8048393203	Www.mybirthrva.com	1726 Altamont Ave	Suite 2	Richmond	VA	23230	Birth and postpartum doula, childbirth educator, placenta encapsulation specialist.	Doula	\N	\N	\N	\N	\N
83	2023-12-11 11:49:56.993091	f	\N	Blake Slusser	Birthing Babies	birthingbabiesva@gmail.com	8047618008	Birthva.com	PO Box 3197	\N	Tappahannock 	VA	22560	Doula, childbirth education, prenatal yoga	Childbirth educator/doula	\N	\N	\N	\N	\N
89	2023-12-11 11:49:56.999869	f	\N	Sidra Stanley	Healthy Families Richmond	Sidra.stanley@Richmondgov.com	8046460208	http://www.richmondgov.com/SocialServices/HealthyFamilies.aspx	4100 Hull St. Rd.	\N	Richmond 	VA	23224	Healthy Families Richmond promotes child well-being and prevents the abuse and neglect of children through family-focused and empathic support provided in the home.	Program Supervisor	\N	\N	\N	\N	\N
94	2023-12-11 11:49:57.005907	f	\N	Cristina Evans	Blooming Birth	bloomingbirthrva@gmail.com	7577292085	www.bloomingbirthrva.com	\N	\N	North Chesterfield 	VA	23235	I am a birth doula and certified lactation counselor. I also offer postpartum prep, affirmations workshops, and comfort techniques classes	Birth Doula	\N	\N	\N	\N	\N
99	2023-12-11 11:49:57.011741	f	\N	Sara Babb, LCSW	Old Towne Counseling	sbabb@otcounseling.com	(804) 398-8401	www.otcounseling.com	7489 Right Flank Rd	\N	Mechanicsville	VA	23116	I provide mental health therapy virtually for those in Virginia. I specialize in working with perinatal mental health, but I also have a strong background in working with individuals struggling with symptoms of trauma, depression, and anxiety. 	Therapist	\N	\N	\N	\N	\N
101	2023-12-11 11:49:57.013996	f	\N	Lauren Collins	WellNest Counseling and Services	admin@wellnestrva.com	8046016169	https://www.wellnestrva.com/	2609 Lancraft Rd	\N	N Chesterfield	VA	23235	Outpatient mental health appointments. Generally 60 minute sessions.	Director, Mental Health Therapist and Consultant	\N	\N	\N	\N	\N
103	2023-12-11 11:49:57.016223	f	\N	Lydia English	\N	lydiamenglish@gmail.com	\N	\N	\N	\N	\N	VA	23230	I am a support to the community through the free clinics, in the field when I meet moms and people in  distress that come for support. This is an informal volunteer service, I personally give, , even though I have been trained as Lactation and  Mental Health First Aid Support. 	Disability Rights Advocate and Community Health Worker	\N	\N	\N	\N	\N
54	2023-12-11 11:49:56.92353	f	\N	Ashley Shaw	Take A Deep Breath, LLC	takeadeepbreathllc@gmail.com	8046380961	\N	\N	\N	Chesterfield	VA	\N	I offer Full Spectrum Doula Services and Breastfeeding Support. I am currently in training to become a Certified Lactation Counselor and will be completed with that course in December 2021.	Full Spectrum Doula	\N	\N	\N	\N	\N
58	2023-12-11 11:49:56.945188	f	\N	Sarah Thorpe	Nurturing Birth and Beyond 	sarah@nurturingbirthrva.com	4345097893	Www.nurturingbirthrva.com	9441 Rutlandshire Dr	\N	Mechanicsville	VA	23116	I am a certified childbirth educator, professional birth doula, certified postpartum doula and an IBCLC who provides in home care. 	IBCLC and Educator	\N	\N	\N	\N	\N
60	2023-12-11 11:49:56.947875	f	\N	Chelsea Watson	Birth and Beyond Doula Services, LLC	chelseathedoula05@gmail.com	8043091921	\N	2614 p st	\N	Richmond 	VA	23223	Full spectrum doula	Full spectrum doula	\N	\N	\N	\N	\N
64	2023-12-11 11:49:56.953612	f	\N	Jessica Mito	Grow Together Postpartum, LLC	growtogetherpostpartum@gmail.com	5038192089	www.growtogetherpostpartum.com	\N	\N	Richmond	VA	23229	Non-medical physical, emotional, and educational support to families in the early postpartum period.	Postpartum Doula	\N	\N	\N	\N	\N
71	2023-12-11 11:49:56.962658	f	\N	Gabrielle Powell	Well-Play Counseling & Wellbeing Center	Gpowell@well-play.com	5627257118	https://www.well-play.com/	2001 Barrington Ave	\N	Los Angeles 	CA	90025	Promotes positive, equal, and long-term maternal healthcare outcomes supporting women of color in areas such as fertility, family planning, pregnancy, postpartum, and numerous other maternal health challenges.	Therapist 	\N	\N	\N	\N	\N
78	2023-12-11 11:49:56.970733	f	\N	Theresa Termine	Postpartum Support Virginia 	info@postpartumva.org	703-829-7152	https://postpartumva.org/	Post Office Box 7521	\N	Arlington	VA	22207	Postpartum Support Virginia’s MISSION is to help new and expectant mothers and their families overcome anxiety, depression, and other perinatal mood and anxiety disorders (PMADs).	Executive Director 	\N	\N	\N	\N	\N
88	2023-12-11 11:49:56.998754	f	\N	Ann Nost	Healing Circle Counseling	anost@healingcirclecounseling.com	8049247600	Www.healingcirclecounseling.com	1525 Huguenot Rd	Suite 100	Midlothian	VA	23113	Mental health therapy services aimed at the perinatal community, women who have experienced including loss and NICU admissions	Therapist 	\N	\N	\N	\N	\N
113	2023-12-11 11:49:57.044655	f	\N	Donna Westcott	A Sweet New Life Doula Services, LLC	asweetnewlife@gmail.com	8045178043	www.asweetnewlifedoulaservices.com	\N	\N	Mechanicsville	VA	\N	Birth Doula.  2 prenatal meetings, labor support, 2 postpartum follow-up meetings, etc. 	Birth Doula	\N	\N	\N	\N	\N
117	2023-12-11 11:49:57.048297	f	\N	Rochelle Alberti	Nest and Nurture	albertirochelle@gmail.com	8044010640	Nest-and-nurture.com	5840 Charles City Rd	\N	Henrico	VA	23231	Lactation counseling and birth doula services which include helping get home and any siblings ready for new family member.  I am looking to expand to postpartum doula services as well.	Lactation Counselor	\N	\N	\N	\N	\N
68	2023-12-11 11:49:56.959538	f	\N	Joy Brock	LaunchPad Counseling	joy@launchpadcounseling.com	8046654681	counseling.com	2008 Libbie Ave	\N	Richmond	VA	23226	I provide therapy to individuals and couples dealing with perinatal mood disorders and struggles in adjusting to parenthood. 	Lcsw	\N	\N	\N	\N	\N
75	2023-12-11 11:49:56.967104	f	\N	Dr. Janelle S. Peifer, LCP	Peifer Psychology	janelle@peiferpsychology.com	678.561.4187	www.peiferpsychology.com	\N	\N	Henrico	VA	23229	Dr. Janelle S. Peifer is a psychologist who provides inclusive, evidence-based therapy to birthing folks and their families.	Founder + Lead Psychologist	\N	\N	\N	\N	\N
79	2023-12-11 11:49:56.971538	f	\N	Aurea Hawkes	The Sol Doula 	Hawkesaurea@gmail.com	8045915316	\N	\N	\N	Richmond  	VA	\N	I am a Full Spectrum Doula. My services include birth, postpartum, and abortion. 	Full Spectrum Doula	\N	\N	\N	\N	\N
85	2023-12-11 11:49:56.995215	f	\N	Melanie Headley	A Brighter Birth	melanie@abrighterbirth.com	8048744442	abrighterbirth.com	112 N. Arthur Ashe Blvd.	\N	Richmond	VA	23220	Birth Doulas, Postpartum Doulas, CLC support, Childbirth Education Courses	Certified Birth Doula, Childbirth Educator, Certified Lactation Counselor	\N	\N	\N	\N	\N
93	2023-12-11 11:49:57.004629	f	\N	Erica Angert	Erica the Doula	ericathedoula@gmail.com	2259781507	www.ericathedoularva.com	7901 Shadowberry Ct	\N	Richmond	VA	23227-1668	Postpartum doula and certified breastfeeding specialist	Postpartum doula	\N	\N	\N	\N	\N
95	2023-12-11 11:49:57.006932	f	\N	Melissa Yeager	Open Arms Birth Collective LLC	melissa@openarmsbc.com	8043852100	www.openarmsbc.com	4804 Chamberlayne Ave	\N	Richmond	VA	23227	I'm a certified professional birth doula, and a lactation educator (I was certified, but let it lapse while I'm in nursing school). I work with a number of other birth workers in Open Arms Birth Collective. I am not taking many clients at present because I'm in nursing school. I also work as a birth assistant with a local homebirth certified nurse midwife.	Birth doula	\N	\N	\N	\N	\N
100	2023-12-11 11:49:57.013063	f	\N	Lisa Hileman	Children's Hospital of Richmond	lisa.hileman@vcuhealth.org	804-828-2467	https://www.chrichmond.org/services/primary-care/lactation/lactation-services	1001 East Marshall Street	\N	Richmond	VA	23298	IBCLC/FNP at VCU Health System, primarily working out of the Short Pump office.	FNP and lactation consultant	\N	\N	\N	\N	\N
105	2023-12-11 11:49:57.017964	f	\N	Reid Byrne	Mother Nurture Midwifery 	reid@MotherNurtureMidwifery.com	8042200691	www.mothernurturemidwifery.com	7305 Hancock Village Rd. 	\N	Chesterfield 	VA	23832	We provide telehealthcare services to women throughout Virginia for women’s health, perinatal health, and mental health services. Through our secure and convenient telehealth platform, our practitioners can conduct mental health screenings that are more thorough than those offered during standard office visits. Together, we will develop a care plan that works for you. If you are in acute distress, we can prescribe medications to stabilize you and will provide follow up care for medication management. 	Owner, Certified Nurse Midwife	\N	\N	\N	\N	\N
109	2023-12-11 11:49:57.023014	f	\N	Kayley Mayhew	Central Virginia Doulas	kayley@cvadoulas.com	4342143034	www.cvadoulas.com	4411 GOODVIEW ST	\N	LYNCHBURG	VA	24502	Birth doula, bereavement doula, sibling doula, postpartum doula, and infant feeding support. 	Co-Founder and Doula	\N	\N	\N	\N	\N
111	2023-12-11 11:49:57.041997	f	\N	Dorota Hill	Dragonfly Family Services	hello@dragonflyrva.com	7038641703	www.dragonflyrva.com	\N	\N	Richmond	VA	23221	Postpartum, bereavement, and abortion doula. Certified Lactation Couselor	Postpartum doula and lactation counselor	\N	\N	\N	\N	\N
118	2023-12-11 11:49:57.049837	f	\N	Sara Krivanec	MyBirth LLC 	sara.mybirthrva@gmail.com	8043878847	mybirthrva.com	1726 Altamont Ave Suite 2	\N	Richmond 	VA	23230	Certified Birth Doula and Lactation Counselor with MyBirth	Birth Doula, Certified Lactation Counselor and Educator 	\N	\N	\N	\N	\N
86	2023-12-11 11:49:56.996549	f	\N	Carrie Schaeffer	Full Circle Grief Center	carrie@fullcirclegc.org	804-912-2947	www.fullcirclegc.org	10611 Patterson Avenue	#201	Richmond	VA	23238	Non-profit grief support agency that offers individual grief counseling to adults and children and has a loss-specific program for perinatal loss that includes 8-week perinatal loss support group and monthly pregnancy after loss support group.	Perinatal Bereavement Services Manager and Adult Grief Therapist	\N	\N	\N	\N	\N
90	2023-12-11 11:49:57.000671	f	\N	Amy Moore	\N	amymooredoula@gmail.com	804-601-6194	www.Facebook.com/AmyMooreDoula	\N	\N	Richmond	VA	23236	Birth Doula Support, including prenatal and postpartum meetings	Birth Doula	\N	\N	\N	\N	\N
98	2023-12-11 11:49:57.0108	f	\N	Karli Shank	Healing Circle Counseling	kshank@healingcirclecounseling.com	804-924-7600	https://healingcirclecounseling.com/	1525 Huguenot Rd	Suite 100	Midlothian	VA	23112	Individual Psychotherapy (outpatient therapy)	Therapist	\N	\N	\N	\N	\N
\.


--
-- Data for Name: demographic_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.demographic_profile (id, provider_id, date_created, age) FROM stdin;
1	1	2023-12-11 13:31:42.254141	34
\.


--
-- Data for Name: demographic_profile_ethnicity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.demographic_profile_ethnicity (id, demographic_profile_description, demographic_profile_id, ethnicity_id) FROM stdin;
1	\N	1	3
2	\N	1	4
\.


--
-- Data for Name: demographic_profile_gender; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.demographic_profile_gender (id, demographic_profile_description, demographic_profile_id, gender_id) FROM stdin;
1	\N	1	1
\.


--
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organization (id, date_created, needs_review, edit_hash, name, email, phone, website, address_1, address_2, city, state, zip, overview, year_established, logo) FROM stdin;
1	2023-12-11 13:26:37.431504	f	\N	test org 1				13507 NE 83rd Circle		Vancouver	WA	\N	\N	\N	\N
\.


--
-- Data for Name: organization_appointment_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organization_appointment_type (id, organization_description, organization_id, appointment_type_id) FROM stdin;
1	\N	1	1
\.


--
-- Data for Name: organization_payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organization_payment (id, organization_description, organization_id, payment_id) FROM stdin;
1	\N	1	6
\.


--
-- Data for Name: organization_provider; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organization_provider (id, organization_description, organization_id, provider_id) FROM stdin;
\.


--
-- Data for Name: provider_appointment_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_appointment_type (id, provider_description, provider_id, appointment_type_id) FROM stdin;
\.


--
-- Data for Name: provider_certification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_certification (id, provider_description, provider_id, certification_id) FROM stdin;
1	\N	1	11
2	\N	2	4
3	\N	2	9
4	\N	2	17
5	\N	4	9
6	\N	5	11
7	\N	6	9
8	\N	7	11
10	\N	9	10
9	\N	9	9
11	\N	10	9
12	\N	11	9
13	\N	13	9
14	\N	14	4
15	\N	14	19
16	\N	14	14
17	\N	15	1
18	\N	18	2
19	\N	18	19
20	\N	19	2
21	\N	19	9
22	\N	21	17
23	\N	22	17
24	\N	23	9
25	\N	24	2
26	\N	25	2
28	\N	26	2
27	\N	14	9
29	\N	26	1
30	\N	26	17
31	\N	27	2
32	\N	28	6
33	\N	28	8
35	\N	29	9
34	\N	29	19
36	\N	30	9
37	\N	32	17
38	\N	33	9
39	\N	36	9
40	\N	37	1
41	\N	37	17
42	\N	39	14
43	\N	39	15
44	\N	39	17
45	\N	41	17
46	\N	42	1
47	\N	42	17
48	\N	43	9
49	\N	44	16
50	\N	45	1
51	\N	45	17
52	\N	48	16
53	\N	49	5
54	\N	50	9
55	\N	52	1
56	\N	52	17
57	\N	53	2
58	\N	55	9
59	\N	56	1
60	\N	56	17
61	\N	57	9
62	\N	58	1
63	\N	58	17
64	\N	60	9
65	\N	61	4
66	\N	61	9
67	\N	62	1
68	\N	62	17
69	\N	63	1
70	\N	63	17
71	\N	66	2
72	\N	66	6
73	\N	66	9
74	\N	67	1
75	\N	67	2
76	\N	67	7
77	\N	67	19
78	\N	67	9
79	\N	68	11
80	\N	72	14
81	\N	72	17
82	\N	73	9
83	\N	75	12
84	\N	75	15
85	\N	77	2
86	\N	79	9
87	\N	80	2
88	\N	80	8
89	\N	80	9
90	\N	82	3
91	\N	82	9
92	\N	84	16
93	\N	85	2
94	\N	85	9
95	\N	86	11
96	\N	87	9
97	\N	88	11
98	\N	91	10
99	\N	92	11
100	\N	92	14
101	\N	94	2
102	\N	95	9
103	\N	95	15
104	\N	96	2
105	\N	97	1
106	\N	97	16
107	\N	98	11
108	\N	99	11
109	\N	100	1
110	\N	100	17
111	\N	101	11
112	\N	102	1
113	\N	102	17
114	\N	103	8
115	\N	104	1
116	\N	104	17
117	\N	105	17
118	\N	106	9
119	\N	108	12
120	\N	108	15
121	\N	109	7
122	\N	109	9
123	\N	110	2
124	\N	110	9
125	\N	111	2
126	\N	112	1
127	\N	112	17
128	\N	114	1
129	\N	116	11
130	\N	117	2
131	\N	118	2
132	\N	118	9
\.


--
-- Data for Name: provider_language; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_language (id, provider_description, provider_id, language_id) FROM stdin;
\.


--
-- Data for Name: provider_payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_payment (id, provider_description, provider_id, payment_id) FROM stdin;
1	\N	1	5
2	\N	2	5
3	\N	3	5
4	\N	3	6
5	\N	4	5
6	\N	5	2
7	\N	5	3
8	\N	5	5
9	\N	5	6
10	\N	6	5
11	\N	6	1
12	\N	6	6
13	\N	7	2
14	\N	7	3
15	\N	7	6
16	\N	8	5
17	\N	9	5
18	\N	9	6
19	\N	10	3
20	\N	10	5
21	\N	11	5
22	\N	11	6
23	\N	12	5
24	\N	12	6
25	\N	13	5
26	\N	14	6
27	\N	14	5
28	\N	15	5
29	\N	16	1
30	\N	16	2
31	\N	16	3
32	\N	16	4
33	\N	16	6
34	\N	18	1
35	\N	19	5
36	\N	19	6
37	\N	20	1
38	\N	20	5
39	\N	20	6
40	\N	21	1
41	\N	22	5
42	\N	23	1
43	\N	23	6
44	\N	23	5
45	\N	24	5
46	\N	25	5
47	\N	25	6
48	\N	26	1
49	\N	26	2
50	\N	26	3
51	\N	27	5
52	\N	28	5
53	\N	28	6
55	\N	29	6
54	\N	29	5
56	\N	30	5
57	\N	30	6
58	\N	31	5
59	\N	32	1
60	\N	32	5
61	\N	32	6
62	\N	33	5
63	\N	34	5
64	\N	35	6
65	\N	36	1
66	\N	36	2
67	\N	36	5
68	\N	36	6
69	\N	38	2
70	\N	38	5
71	\N	38	6
72	\N	39	5
73	\N	40	5
74	\N	41	5
75	\N	42	3
76	\N	42	5
77	\N	42	6
78	\N	43	5
79	\N	44	1
80	\N	44	2
81	\N	44	3
82	\N	44	5
83	\N	47	1
84	\N	47	5
85	\N	47	6
86	\N	49	5
87	\N	49	6
88	\N	50	5
89	\N	50	6
90	\N	51	5
91	\N	52	5
92	\N	53	2
93	\N	53	3
94	\N	53	5
95	\N	53	6
96	\N	54	1
97	\N	54	5
98	\N	54	6
99	\N	55	5
100	\N	56	5
101	\N	56	6
102	\N	57	5
103	\N	58	5
104	\N	59	1
105	\N	59	5
106	\N	59	6
107	\N	60	1
108	\N	60	2
109	\N	60	5
110	\N	60	6
111	\N	61	5
112	\N	61	6
113	\N	62	2
114	\N	62	3
115	\N	62	4
116	\N	63	2
117	\N	63	3
118	\N	64	5
119	\N	65	1
120	\N	65	5
121	\N	66	2
122	\N	66	3
123	\N	66	6
124	\N	67	2
125	\N	67	5
126	\N	67	6
127	\N	68	2
128	\N	68	5
129	\N	68	6
130	\N	69	5
131	\N	70	5
132	\N	71	6
133	\N	72	2
134	\N	72	3
135	\N	72	5
136	\N	72	6
137	\N	73	5
138	\N	73	6
139	\N	74	5
140	\N	75	5
141	\N	76	5
142	\N	77	2
143	\N	77	3
144	\N	77	4
145	\N	79	6
146	\N	80	3
147	\N	80	5
148	\N	80	6
149	\N	81	5
150	\N	82	5
151	\N	83	5
152	\N	84	5
153	\N	85	1
154	\N	85	5
155	\N	85	6
156	\N	86	1
157	\N	86	2
158	\N	86	5
159	\N	87	5
160	\N	88	2
161	\N	88	3
162	\N	88	5
163	\N	89	1
164	\N	90	5
165	\N	91	5
166	\N	91	6
167	\N	92	2
168	\N	92	3
169	\N	92	5
170	\N	92	6
171	\N	93	1
172	\N	93	5
173	\N	94	5
174	\N	95	1
175	\N	95	5
176	\N	95	6
177	\N	96	3
178	\N	96	2
179	\N	97	2
180	\N	97	3
181	\N	99	2
182	\N	99	3
183	\N	99	5
184	\N	99	6
185	\N	101	2
187	\N	101	5
188	\N	103	1
189	\N	105	5
190	\N	106	1
203	\N	111	6
205	\N	113	5
208	\N	115	5
210	\N	116	5
211	\N	117	1
215	\N	118	5
191	\N	106	2
199	\N	109	5
193	\N	106	6
194	\N	107	5
197	\N	108	5
201	\N	111	1
195	\N	107	6
196	\N	108	2
213	\N	117	6
198	\N	108	6
200	\N	110	5
202	\N	111	5
204	\N	113	1
209	\N	116	6
212	\N	117	5
214	\N	118	2
186	\N	101	3
192	\N	106	5
206	\N	113	6
207	\N	114	2
\.


--
-- Data for Name: provider_pronoun; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_pronoun (id, provider_description, provider_id, pronoun_id) FROM stdin;
\.


--
-- Data for Name: provider_service; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider_service (id, provider_description, provider_id, service_id) FROM stdin;
1	\N	1	3
2	\N	2	1
3	\N	2	2
4	\N	3	3
5	\N	4	1
6	\N	5	3
7	\N	6	1
8	\N	7	3
9	\N	8	1
10	\N	8	3
11	\N	9	3
12	\N	10	1
13	\N	11	1
14	\N	12	1
15	\N	12	2
16	\N	13	1
17	\N	13	2
18	\N	14	1
19	\N	14	2
20	\N	14	3
21	\N	15	2
22	\N	16	2
23	\N	17	2
24	\N	18	2
25	\N	19	1
26	\N	19	2
27	\N	20	1
28	\N	21	3
29	\N	22	2
30	\N	23	1
31	\N	24	2
32	\N	25	2
33	\N	26	2
34	\N	27	1
35	\N	27	2
36	\N	28	1
37	\N	28	2
38	\N	29	1
39	\N	29	2
40	\N	30	1
41	\N	31	3
42	\N	32	1
43	\N	33	1
44	\N	34	1
45	\N	35	1
46	\N	35	2
47	\N	36	1
48	\N	37	2
49	\N	38	1
50	\N	39	3
51	\N	40	1
52	\N	41	1
53	\N	42	2
54	\N	43	1
55	\N	44	2
56	\N	45	2
57	\N	46	1
58	\N	46	2
59	\N	47	1
60	\N	48	2
61	\N	49	1
62	\N	49	2
63	\N	50	1
64	\N	50	3
65	\N	52	1
66	\N	53	1
67	\N	53	2
68	\N	54	1
69	\N	54	2
70	\N	55	1
71	\N	56	2
72	\N	57	1
73	\N	58	1
74	\N	58	2
75	\N	59	1
76	\N	60	1
77	\N	61	1
78	\N	61	2
79	\N	62	2
80	\N	63	2
81	\N	64	1
82	\N	65	1
83	\N	66	1
84	\N	66	2
85	\N	67	1
86	\N	67	2
87	\N	68	3
88	\N	70	2
89	\N	71	3
90	\N	72	3
91	\N	73	1
92	\N	75	3
93	\N	76	1
94	\N	77	2
95	\N	78	3
96	\N	79	1
97	\N	80	1
98	\N	80	2
99	\N	81	1
100	\N	82	1
101	\N	82	2
102	\N	83	1
103	\N	84	3
104	\N	85	1
105	\N	85	2
106	\N	87	1
107	\N	88	3
108	\N	90	1
109	\N	91	3
110	\N	92	3
111	\N	93	1
112	\N	93	2
113	\N	94	1
114	\N	94	2
115	\N	95	1
116	\N	95	2
117	\N	96	2
118	\N	97	2
119	\N	98	3
120	\N	99	3
121	\N	100	2
122	\N	101	3
123	\N	102	2
124	\N	102	3
125	\N	104	2
126	\N	105	3
127	\N	106	1
128	\N	107	1
129	\N	108	3
130	\N	109	1
131	\N	109	2
132	\N	110	1
133	\N	110	2
134	\N	111	1
135	\N	111	2
136	\N	112	2
137	\N	113	1
138	\N	114	2
139	\N	115	1
140	\N	116	3
141	\N	117	2
142	\N	117	1
143	\N	118	1
144	\N	118	2
\.


--
-- Name: appointment_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appointment_type_id_seq', 2, true);


--
-- Name: certification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.certification_id_seq', 19, true);


--
-- Name: demographic_profile_ethnicity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.demographic_profile_ethnicity_id_seq', 2, true);


--
-- Name: demographic_profile_gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.demographic_profile_gender_id_seq', 1, true);


--
-- Name: demographic_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.demographic_profile_id_seq', 1, true);


--
-- Name: ethnicity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ethnicity_id_seq', 9, true);


--
-- Name: gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gender_id_seq', 6, true);


--
-- Name: language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.language_id_seq', 63, true);


--
-- Name: organization_appointment_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organization_appointment_type_id_seq', 1, true);


--
-- Name: organization_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organization_id_seq', 1, true);


--
-- Name: organization_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organization_payment_id_seq', 1, true);


--
-- Name: organization_provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organization_provider_id_seq', 1, false);


--
-- Name: payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_id_seq', 7, true);


--
-- Name: pronoun_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pronoun_id_seq', 5, true);


--
-- Name: provider_appointment_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_appointment_type_id_seq', 1, false);


--
-- Name: provider_certification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_certification_id_seq', 132, true);


--
-- Name: provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_id_seq', 118, true);


--
-- Name: provider_language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_language_id_seq', 1, false);


--
-- Name: provider_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_payment_id_seq', 215, true);


--
-- Name: provider_pronoun_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_pronoun_id_seq', 1, false);


--
-- Name: provider_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_service_id_seq', 144, true);


--
-- Name: service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_id_seq', 3, true);


--
-- PostgreSQL database dump complete
--

