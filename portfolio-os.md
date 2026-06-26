# Portfolio OS

**Version:** 0.1 (initial)
**Owner:** You (Founder)
**Scope:** Account level / user scope. Reusable across every venture.
**Purpose:** Single source of truth for cross-venture assets, standards, and protocols that sit above any one venture. Venture Briefs inherit from this file. When a cross-venture standard changes, change it here, not in a venture Brief or in chat.

---

## 1. Purpose and scope

This file holds only assets that are reusable across more than one venture: shared standards, templates, reusable Skills, scoring rubrics, and protocols. It is the "macro layer" or "portfolio layer."

What belongs here:
- Standards and conventions that should apply by default to any venture (decision-rights ladder, reviewer instruction, Brief structure).
- Reusable Skills registered for account-level use (uploaded once, available to every venture).
- Tools for evaluating and starting new ventures (the niche-scoring rubric, the Brief template).
- The candidate log for assets that are on their way to becoming reusable.

What does NOT belong here:
- Anything specific to a single venture: its audience, its voice, its topics, its roadmap, its roster status. That lives in the venture's own Founder's Brief (project scope).
- Reader-facing or customer-facing content of any kind.

Relationship to venture Briefs: this file sets portfolio-wide defaults. Each venture has its own Founder's Brief that inherits those defaults and then overrides or extends them for that venture. A venture Brief is the source of truth for that venture; this file is the source of truth for what is shared.

---

## 2. Inheritance convention

Every venture Brief carries this line at the very top, directly under its title:

> Inherits portfolio standards from portfolio-os.md; this Brief overrides for this venture.

The rule it encodes:
- Portfolio OS sets the defaults. If a venture Brief is silent on something this file covers (decision rights, reviewer process, Brief structure), the portfolio default applies.
- The venture Brief wins on conflict. If a venture Brief states something that contradicts this file, the venture Brief governs that venture. The override should be deliberate and, ideally, noted in the venture's changelog so the divergence is visible.
- If you (or any role) notice a venture Brief silently contradicting a portfolio standard without an explicit override, flag it rather than guessing which one is current.

---

## 3. Reusable asset registry

The live inventory of cross-venture assets. This table, not chat memory, is the system of record for what is reusable and where it lives. Update it when an asset is created, promoted, relocated, or used.

| Asset | Type | Scope | Location | Status | Times used |
|---|---|---|---|---|---|
| brief-template | Skill | Portfolio / account | Settings > Skills (account) | Drafted, pending upload | 0 |
| strict-reviewer | Skill | Portfolio / account | Settings > Skills (account) | Drafted, pending upload | 0 |
| niche-scorer | Skill | Portfolio / account | Settings > Skills (account) | Drafted, pending upload | 0 |
| Generic Founder's Brief template | Doc | Portfolio / account | portfolio-os.md section 4 | Active | 1 (this portfolio) |
| Generic decision-rights ladder | Doc | Portfolio / account | portfolio-os.md section 5 | Active | 0 |
| Niche-scoring rubric | Doc | Portfolio / account | portfolio-os.md section 6 | Active | 0 |
| Generic strict-reviewer standing instruction | Doc | Portfolio / account | portfolio-os.md section 7 | Active | 0 |

Notes on the columns:
- **Type:** Skill (an uploaded SKILL.md), template (a fill-in skeleton), or doc (a standing reference held in this file).
- **Scope:** portfolio/account means available everywhere; venture/project means it belongs to one venture and should not be in this file at all (listed here only if mid-promotion).
- **Status:** Drafted, pending upload / Active / Deprecated / Candidate (see section 8).
- **Times used:** increment each time the asset is applied to real work, so promotion and pruning decisions rest on evidence, not memory.

---

## 4. Generic Founder's Brief template

The starting skeleton for any new venture's Founder's Brief. Derived from the BeginnerFinanceHub Brief and stripped of finance and content-publishing specifics. The `brief-template` Skill (section 3) populates this from a founder intake. Sections marked (venture-type) only apply to some venture types; keep or cut them per venture.

```
# [Venture name]: Founder's Brief

Inherits portfolio standards from portfolio-os.md; this Brief overrides for this venture.

Version: [x.y]
Owner: [you / role]
Purpose: Single source of truth for this venture. Every new chat or task starts here. Change decisions here, not in chat.

1. North Star
   The real goal in one paragraph. What success looks like, the time horizon, and
   the posture (fast vs slow, volume vs quality, monetization urgency).

2. Audience and the gap
   Who this is for, what they need or fear, and the specific gap competitors leave
   open. The gap is the differentiation.

3. Positioning and promise (venture-type)
   What you promise the audience or customer, and how the experience differs from
   the obvious alternatives.

4. Quality bar and the great-result test
   The one-sentence test for "this is good." What a great result looks like to the
   person it is for, and to a domain expert checking it.

5. Quality rubric
   Hard gates (any failure blocks shipping) plus scored dimensions with a numeric
   threshold to ship. See the generic strict-reviewer instruction in section 7.

6. Reviewer standing instruction
   The venture-specific version of the strict-reviewer instruction, run on every
   deliverable in a separate context from the maker.

7. Operating model
   The pipeline from idea to shipped, and who or what does each step.

8. Org structure and roles
   Which roles exist, which are active vs dormant, and the activation trigger for
   each dormant one.

9. Decision-rights ladder
   What is automated (reversible, low-risk) vs what needs founder approval
   (irreversible or trust-affecting). Inherits the generic ladder in section 5;
   note any venture-specific additions.

10. Identity and trust
    Who the audience-facing identity is (real name, pen name, brand), the honest
    bio, and how credibility is earned. No fabricated credentials.

11. Tooling
    Platform, workflow tools, subscription tier, and any practical constraints.

12. Momentum protocol
    How work stays organized: one source of truth, one job per chat, topic-shift
    signaling, and a parking lot.

13. Guardrails and constraints
    The non-negotiables for this venture, including any regulatory or trust
    constraints and any house style rules (for example, no em dashes).

14. Roadmap
    Ordered phases with status. Keep each phase scoped to fit the weekly time
    budget.

15. Open questions for the founder
    Decisions still pending.

16. Parking lot
    Side ideas and PM flags, kept here so they do not derail the current job.

17. Changelog
    Every material decision, dated by version.
```

---

## 5. Generic decision-rights ladder

The default split between what proceeds automatically and what requires the founder's explicit yes. Venture Briefs inherit this and may add venture-specific items.

**Automate (reversible, low-risk). Proceed without asking:**
- Research, fact-gathering, and source-collection.
- Drafting and internal iteration.
- Suggesting structure, links, names, or options for the founder to choose from.
- Reorganizing or summarizing the founder's own material.

**Founder approval required (irreversible or trust-affecting). Surface and wait for an explicit yes:**
- Publishing, posting, or shipping anything audience-facing or customer-facing.
- Any specific factual or numeric claim that carries risk, and anything in a regulated or trust-sensitive domain.
- Anything that touches money: pricing, purchases, transfers, monetization changes.
- Anything that touches legal or tax posture, entity, or binding commitments.
- Sending messages on the founder's behalf, or changing settings, permissions, or standing configuration.
- Any action that is hard or impossible to undo.

Standing rule: when in doubt about which side a step falls on, treat it as approval-required and ask. The cost of one extra question is small; the cost of an unwanted irreversible action is not.

---

## 6. Niche-scoring rubric

For evaluating a candidate venture or niche before committing time to it. Score each criterion 1 to 5, multiply by its weight, and sum. The weighting deliberately favors the three levers the whole portfolio thesis rests on: surviving the shift to AI-mediated discovery, owning the audience relationship, and earning revenue that does not depend on raw ad-traffic volume. The `niche-scorer` Skill (section 3) runs this.

**Scoring scale:** 1 = very weak, 2 = weak, 3 = adequate, 4 = strong, 5 = very strong. Use the anchors below to stay honest.

| # | Criterion | Weight | Score 1 (weak) | Score 5 (strong) |
|---|---|---|---|---|
| 1 | AI-search resilience | 3 | A pure informational play an AI answer engine fully substitutes; readers never need the source | Offers value an AI answer cannot replace: tools, community, identity, proprietary data, or a brand people seek by name |
| 2 | Owned-audience potential | 3 | Drive-by traffic only; no natural reason to subscribe or return | Strong, recurring reason to join a list, app, or membership you control |
| 3 | Monetization independent of ad-traffic volume | 3 | Only viable through display-ad impressions | Multiple high-margin paths that pay per relationship: products, services, qualified affiliates, subscriptions |
| 4 | Market size | 2 | Too tiny to sustain, or so broad it cannot be differentiated | Sizeable, well-defined, and growing |
| 5 | Competition and differentiation gap | 2 | Saturated, strong incumbents, no visible gap | A clear underserved gap you can credibly own |
| 6 | Founder interest and credibility | 2 | Low interest or no believable point of view; likely to stall | Genuine interest plus an authentic, defensible perspective (credentialed or well-sourced) |
| 7 | Automation potential | 2 | Needs constant manual specialist labor | The AI-assisted pipeline carries most of the work, with founder judgment at the gates |
| 8 | Startup effort (inverse) | 1 | Heavy upfront build, licensing, or capital before any value ships | A first credible asset can ship in days at near-zero cost |

**Math:** maximum weighted score is 90 (sum of weights 18, times 5). Convert to a percentage if useful (weighted total divided by 90).

**Verdict bands:**
- 72 and above (80%+): strong candidate. Worth a real test-drive.
- 54 to 71 (60 to 79%): promising. Fix or scope around the low-scoring criteria before committing, or narrow the niche.
- Below 54 (under 60%): deprioritize or reshape. Likely fails on a core lever.

**Override caution:** if any of the three priority criteria (1, 2, 3) scores a 1 or 2, flag the idea regardless of the total. A high total propped up by easy criteria while a priority lever is broken is a trap, because those three levers are what the portfolio is built to win on.

---

## 7. Generic strict-reviewer standing instruction

The portfolio default for independent QA. Each venture adapts it by inserting that venture's rubric. Run it on every deliverable, in a separate context from whoever (or whatever) produced the draft, so the review is genuinely independent.

> You are a strict reviewer for [venture and deliverable type]. Score this deliverable against the rubric below ([N] hard gates, [M] scored dimensions). For each hard gate, return PASS or FAIL with the exact reason. Flag every factual or numeric claim that needs verifying. Flag any passage that risks reading like, or being too close to, an existing source. Return a verdict of SHIP or REVISE. If REVISE, list the specific fixes. Do not rewrite the deliverable.
>
> [Insert the venture's rubric here: hard gates and scored dimensions with the numeric threshold to ship.]

Why these constraints matter: keeping the reviewer in a separate context stops it from rubber-stamping its own reasoning. Forbidding the rewrite keeps the reviewer honest as a judge rather than quietly becoming a second author, and keeps the maker accountable for the fixes.

---

## 8. PORTFOLIO CANDIDATE protocol

How a venture-scope asset graduates into a reusable portfolio asset.

**Flagging.** When the PM notices something built for one venture that looks reusable (a prompt, a template, a checklist, a workflow), it flags it inline, in the moment, like this:

> PORTFOLIO CANDIDATE: [asset name] ([one line on what it is and why it might be reusable]).

**Logging.** The flag is then recorded in the reusable asset registry (section 3) with Status = Candidate. The registry, not chat memory, is the candidate log. A candidate that only lives in a chat is effectively lost, so if it is worth flagging it is worth logging.

**Promotion criteria.** Promote a candidate to an account-level Skill (or portfolio doc) when either is true:
- It has been used in two or more ventures, or twice in one venture in a clearly reusable way, or
- It is obviously generic on its face, even before a second use.

**Batching.** To avoid context-switching cost, batch promotions rather than doing them one at a time. The default batch point is the venture #2 kickoff: when a second venture starts, review the candidate log and promote everything that has met the criteria. Promote sooner only if a candidate is clearly blocking the new venture.

**On promotion:** create the Skill or doc, change the registry Status from Candidate to Active (or Drafted, pending upload), set its Location, and reset Times used to count from first reuse.

---

## 9. Changelog

- v0.1: initial creation of the portfolio layer. Established purpose and scope, inheritance convention, reusable asset registry (seeded with the brief-template, strict-reviewer, and niche-scorer Skills plus four in-file docs), generic Founder's Brief template, generic decision-rights ladder, niche-scoring rubric (8 weighted criteria, max 90, priority weighting on AI-search resilience, owned-audience potential, and non-ad-volume monetization), generic strict-reviewer standing instruction, and the PORTFOLIO CANDIDATE protocol. Created during the BeginnerFinanceHub venture as the first venture to inherit from it.
