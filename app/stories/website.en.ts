export default `## 01｜Why did I want a personal website?

Honestly, I did not decide to build a personal website because I was especially interested in programming.

I am a finance student. I spent four undergraduate years studying economics and continued with finance in graduate school. Most of my internships have involved securities, funds, and investment research.

With that background, a career in finance might seem like the natural next step. The problem is that I am not sure whether I truly enjoy it.

For a long time, I seemed to be following a path that had already been laid out. From primary school through high school, the main goals were to study hard, earn good marks, and get into a better university.

The relationship between effort and reward seemed clear. A good exam result often brought recognition from teachers, parents, and classmates, and that recognition motivated the next round of effort.

At university, however, that logic gradually stopped working.

Nobody told me exactly what to do next. I gained more freedom but gradually lost my sense of direction. By the end of those four years, I still had not really figured out what kind of person I wanted to become.

That uncertainty did not disappear in graduate school. During autumn recruitment in particular, as most of my applications went unanswered, I began seriously asking myself: what could I do outside finance?

Meanwhile, AI was advancing at an extraordinary pace. New models, tools, and products kept appearing. I could sense the opportunities in that change, but I was also aware of the gap between those opportunities and what I knew.

If I wanted to explore internet companies, AI, or businesses expanding overseas, how could I demonstrate an ability to work beyond my field?

Simply putting “proficient with AI tools” on my résumé did not seem very convincing.

So I had an idea: **rather than tell people I could use AI, why not actually make something with it?**

This website became my first piece of work.

## 02｜After buying the domain, I realized I had no idea how to build a website

On November 12, 2026, I bought a domain through Alibaba Cloud: **jasperjia.work**.

There was no complicated reason behind the choice. Jasper is my English name, Jia is my surname, and .work felt like a suitable place to show my work, projects, and thoughts.

The first thing I did after buying it was type the address into my browser. Nothing opened.

At the time, I did not even realize that buying a domain and building a website were two different things.

I opened ChatGPT and asked what now seems like a very basic question: “I bought a website on Alibaba Cloud and want to turn it into a personal site. Why won’t the address open?”

AI explained that a domain is only an address. To make a website work, I would also need the website code, a hosting service, and DNS records.

That was the first time I had a reasonably clear picture of what happens between writing code and making a website accessible to other people.

Still, I was not planning to learn HTML, CSS, or JavaScript from scratch.

I wanted to try another approach: **if I could describe what I needed clearly enough, could AI help me do the work that would normally require programming knowledge?**

## 03｜Before any code, there was a long conversation about requirements

Looking back, the most interesting part of building the site was not writing code. It was the repeated discussion of requirements between AI and me.

At first, all I knew was that I wanted a personal website. I had no clear idea of how it should look, which features it needed, or what design style to use.

AI started asking me questions, one after another. Did I want a portfolio or a blog? A minimal style or a technology-inspired one? Chinese only or both Chinese and English? Should the homepage emphasize my experience or my projects?

Gradually, I settled on an initial direction: a dark technology-inspired design, two languages, a personal introduction, projects, writing, and an AI lab.

But something changed when we discussed the personal introduction.

At first, AI tried to present me as a “Finance × AI Explorer.” It sounded good and seemed appropriate for a career-oriented site. Yet it felt a little empty.

The real me is not someone who already knows exactly what he wants and is confidently moving toward it. Quite the opposite: I am still uncertain.

I began telling AI about my background: moving through exam-oriented education on a steady stream of positive feedback, losing direction at university, and then facing the uncertainty of employment pressure and technological change in graduate school.

In doing so, I reconsidered why I was building the site.

Originally, I wanted it to supplement my résumé and help recruiters see something beyond my finance experience. Later, I realized it could also be a place to document my exploration.

I could show projects here, but I could also write about questions I had not yet answered. It could be both a portfolio and a digital space of my own.

Of course, I still wanted it to serve primarily as a professional introduction rather than become an entirely public diary.

After several rounds of changes, I reduced the site to four sections:

- **About**: who I am and my past experience.
- **Projects**: what I have made.
- **Writing**: what I am thinking about.
- **AI Lab**: what I am experimenting with creating.

In retrospect, this felt much like analyzing product requirements. The initial need is often vague; even the person requesting something may not know what they really want. It becomes clearer through discussion, attempts, and rejection of earlier ideas.

## 04｜I did not write the code myself, but I really did make the website

Once the basic direction was clear, I began using ChatGPT Work for development.

I described the functions, visual style, and page structure I wanted, and AI generated the corresponding website code.

Throughout the process, I mainly did three things.

**First, describe what I needed.** For example: a dark background, blue-purple gradients, Chinese and English switching, and layouts that worked on both computers and phones.

**Second, look at the result.** After AI finished developing something, I opened the preview and checked whether it matched what I had in mind.

**Third, ask for changes.** If the text was too small, the layout felt unbalanced, or a page seemed unnecessary, I told AI what needed adjusting.

This was very different from how I had imagined programming. I did not have to write code line by line, but I did have to keep judging whether the result was what I actually wanted.

After the first version was complete, the next step was putting it online. That introduced me to several tools I had barely known before.

GitHub stored the code, Vercel deployed the website, and Alibaba Cloud handled the domain I had bought.

I uploaded the code to GitHub, imported the project into Vercel, and deployed it. The site was then accessible through a temporary address provided by Vercel.

To use jasperjia.work itself, however, I still needed to configure DNS.

Following AI’s instructions, I added an A record in Alibaba Cloud to point the domain to Vercel.

At first, Vercel still displayed “Invalid Configuration.” I wondered whether I had done something wrong. After checking, I found that the record had been saved correctly; the DNS change simply had not taken effect yet.

When I opened the browser again, jasperjia.work finally worked.

That felt like an achievement. Just a few hours earlier, I had not even understood why buying a domain did not make a page appear. Now I had a website of my own that anyone could visit.

## 05｜After launch, I kept undoing my own design decisions

I had assumed that getting the website online would mean the task was finished. That was not what happened.

Once the first version was live, I noticed more and more things I disliked: too many pages made the navigation redundant; the introduction sounded too professional to feel like me; the text sizes were inconsistent, and some content did not stand out enough.

So I went back to AI to discuss changes.

Initially, the site had a homepage, About, Projects, Writing, AI Lab, and Contact. Later, I realized that the separate homepage added little value and that contact details could sit within my introduction.

I reduced six sections to four and made About the homepage. At the same time, I kept the F × AI orbit animation that I really liked.

To make reading comfortable in different environments, I added dark and light themes.

I even kept revisiting the type used for my introduction. I wanted my Chinese name, 賈駿, in traditional characters with a natural, handwritten calligraphic feel.

I also replaced the original, rather AI-sounding personal tagline with a line from the Tao Te Ching:

**明道若昧，進道若退。**

**The way forward may seem unclear; progress may feel like retreat.**

These changes might not seem particularly important, but they helped me realize that a piece of work does not have to be perfectly designed at the beginning.

Often, we only discover what we like and dislike when something is actually in front of us. Rather than spend a long time imagining a perfect website, it can be better to make a first version and keep adjusting it.

## 06｜This experience changed how I understand AI’s value

To be honest, building this website does not mean I have mastered software development.

AI generated most of the code, and I still lack a systematic understanding of many of the technical details. Without AI, I probably could not build the same website independently today.

Nevertheless, the experience changed how I think about technology.

Previously, when I considered building a website, an app, or a tool, my first reaction was usually: I cannot program, so I cannot do it.

Now I am starting to think differently: **could I first work out the problem I want to solve, and then use AI to help find a way to solve it?**

That does not mean technical knowledge is no longer important. I still encounter questions I cannot immediately judge, and I need to keep learning the relevant concepts to better understand what AI produces.

At least, though, AI has allowed me to begin before I have fully mastered the technology.

For someone like me, who is not a computer science student, that feels like an important change. It did not turn me into a programmer overnight, but it made creating with technology feel, for the first time, like something that could be part of my own life.

## 07｜This is only a beginning

As I write this, jasperjia.work is still a very early-stage website. Many pages need work, more projects need to be added, and AI Lab certainly does not contain any mature products.

I do not know what it will eventually become. Nor do I know whether it will help with my job search.

But building it has allowed me to do something I had never done before: start with a vague idea and, without systematic programming experience, turn it into a real, accessible piece of work through repeated conversations, trial and error, and revisions with AI.

It has not resolved my uncertainty about my career or suddenly given me a purpose in life.

It has, however, made me realize that when I do not know where the future will lead, I may not need to figure everything out before I begin doing something.

Some answers may only emerge after taking action.

That is why I hope this site can keep going. I want to use it to document my attempts, work, and thoughts. As for where it will ultimately take me, I still do not have an answer.

**明道若昧，進道若退。**

**The way forward may seem unclear; progress may feel like retreat.**

---

Written in November 2026.

Website: [jasperjia.work](https://jasperjia.work)

Source code: [GitHub — jasperjia-website](https://github.com/Sharpieiscoming/jasperjia-website)
`;
