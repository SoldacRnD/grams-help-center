# GRAM Help Center — visual asset brief

## Production rules

Create a single visual system for the public Help Center: photographic/illustrative instructional stills, 16:9 landscape, 1600×900 px minimum, dark charcoal ground, warm off-white paper/ceramic texture, restrained burnt-orange GRAM accent, and generous empty space around the action. The physical GRAM must be the hero; hands should be diverse and unbranded. Do not include readable UI copy, logos other than a subtle GRAM mark, QR codes that scan, personal data, or invented partner branding.

Use the same master prompt suffix on every asset:

> Editorial product instruction still for the GRAM by Soldac Studio Help Center; tactile physical art object with NFC, dark gallery background, warm directional studio light, sophisticated but clear, realistic materials, quiet editorial composition, no readable text, no QR code, no third-party branding, 16:9.

For the interaction states below, generate an illustrative representation rather than pretending to be a literal product screenshot. When the real interface is ready, replace those illustrations with approved UI captures.

## Asset list

| Planned file | Used by | ImageGen brief |
| --- | --- | --- |
| `gram-pack.png` | Getting Started | A sealed GRAM collectible package resting beside the physical piece, clearly showing that it is a tactile artwork rather than a phone-only product. |
| `tap-loader.png` | Getting Started, Troubleshooting | A hand gently tapping a phone to the GRAM; phone display uses a simple abstract amber loading glow, with no words or icons that imply a real interface. |
| `gram-page-front.png` | Claiming | Physical GRAM beside a phone showing an abstract artwork card and ownership area, no text; composition suggests the correct GRAM page opened. |
| `login-to-claim.png` | Claiming | Phone and GRAM with a clean, abstract sign-in gate represented by a person silhouette and warm key/door motif; no readable controls. |
| `claim-piece.png` | Claiming | Close instructional scene: finger poised over a large abstract amber confirmation control on a phone beside the physical GRAM; no text. |
| `official-owner.png` | Claiming | The GRAM and phone together with a discreet warm crown/verified glow, clearly communicating a successful ownership state without text. |
| `continue-claiming.png` | Claiming, Troubleshooting | A visual continuity metaphor: the same GRAM leads from a generic account/profile view back to its artwork page via a subtle amber path or ribbon; no text. |
| `my-collection-entry.png` | My Collection | A phone held above the physical GRAM, opening onto a tidy abstract gallery grid; one path from the object into the collection is visually clear. |
| `collection-card.png` | My Collection | Close view of an abstract collectible card with art image, owner mark, and three small non-readable benefit chips; no invented product UI wording. |
| `perks-list.png` | My Collection | Editorial top-down composition of the GRAM with three small benefit tokens/cards, communicating partner perks and availability without brands or text. |
| `partner-details.png` | My Collection | Counter scene showing the physical GRAM, a small partner counter marker, and a benefit token; staff and collector hands only, no faces required. |
| `physical-gram-security.png` | Privacy & Safety | Hero still of the physical GRAM protected in a sleeve or presentation case, with a phone nearby but visually secondary; conveys that the object is the authority. |
| `perk-example.png` | Redeeming Perks | Physical GRAM alongside a tasteful hospitality/retail benefit such as a coffee or small item, with no partner marks or price text. |
| `partner-validation.png` | Redeeming Perks | Partner staff member tapping the GRAM with a handheld phone, with a subtle green/amber abstract verification glow and no readable screen. |
| `perk-cooldown.png` | Redeeming Perks | A GRAM and benefit token beside an elegant abstract timer/clock motif, communicating a temporary wait without numbers or UI copy. |
| `no-claim-button.png` | Troubleshooting | A phone beside a GRAM showing a deliberately neutral, unavailable-looking abstract action area; illustrates an already-collected or not-ready state without fake text. |

## Integration plan

Save approved files under `help/assets/` using the planned filenames. After generation, update the six English articles to use `./assets/...` and reuse the same images in their PT and ES counterparts with translated alt text and captions. This gives all three languages the same visual instruction set without maintaining duplicate binaries.
