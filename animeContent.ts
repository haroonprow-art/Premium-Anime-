export interface ClipPost {
  id: string;
  title: string;
  animeTitle: string;
  episodeTag: string;
  category: 'Sakuga Cut' | 'Enemy Showdown' | 'Visual Aesthetics' | 'Rival Clash';
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  image: string;
  fpsSpec: string;
  timestamp: string;
  keyAnimator: string;
  upvotes: number;
  comments: number;
  spoilerSafe: boolean;
  description: string;
}

export interface EnemyDossier {
  id: string;
  name: string;
  alias: string;
  series: string;
  threatTier: 'S+ Cataclysm' | 'SS Sovereign' | 'S Mythic Rival';
  peakEpisode: string;
  image: string;
  combatStyle: string;
  communityWinRate: number;
  signatureMoment: string;
  sharedClipsCount: string;
  tags: string[];
}

export const FEATURED_CLIPS: ClipPost[] = [
  {
    id: 'clip-1',
    title: ' Crimson Moon Rooftop Parry — 44-Frame Impact Breakdown',
    animeTitle: 'Blade of the Vermilion Horizon',
    episodeTag: 'S2 · EP 23',
    category: 'Rival Clash',
    authorName: 'Kenji Takahashi',
    authorHandle: '@kenji_frames',
    authorAvatar: '/images/avatar-kenji.jpg',
    image: '/images/showcase-hero-sakuga.jpg',
    fpsSpec: '24 FPS · ON ONES · 4K HDR',
    timestamp: '19:42 — 20:14',
    keyAnimator: 'Y. Nakamura Style Cut #084',
    upvotes: 4820,
    comments: 319,
    spoilerSafe: true,
    description:
      'Notice how the camera locks onto the rain droplets for 3 frames right before the steel spark flash. Zero compression artifacts on dark shadows.',
  },
  {
    id: 'clip-2',
    title: 'Unit-09 Obsidian Breach — Seawall Boss Entrance & Sound Design',
    animeTitle: 'Aegis Protocol: Neo-Bay',
    episodeTag: 'FILM · ACT III',
    category: 'Enemy Showdown',
    authorName: 'Haruka Sato',
    authorHandle: '@haruka_mecha',
    authorAvatar: '/images/avatar-haruka.jpg',
    image: '/images/clip-mecha-boss.jpg',
    fpsSpec: '60 FPS COMPOSITE · LOSSLESS AUDIO',
    timestamp: '54:10 — 55:02',
    keyAnimator: 'Studio Khara Mech Unit',
    upvotes: 6190,
    comments: 512,
    spoilerSafe: true,
    description:
      'Still the most intimidating enemy reveal of the year. The scale cues from the ocean mist and laser telemetry make the threat feel genuinely colossal.',
  },
  {
    id: 'clip-3',
    title: 'Blue Hour Torii Spirit Seal — Masked Antagonist Domain Reveal',
    animeTitle: 'Shrine of Hollow Embers',
    episodeTag: 'S1 · EP 12',
    category: 'Enemy Showdown',
    authorName: 'Ren Kobayashi',
    authorHandle: '@ren_cuts',
    authorAvatar: '/images/avatar-ren.jpg',
    image: '/images/clip-spirit-shrine.jpg',
    fpsSpec: '24 FPS · WIDE GAMUT DCI-P3',
    timestamp: '21:08 — 21:55',
    keyAnimator: 'K. Watanabe Lighting Pass',
    upvotes: 3940,
    comments: 274,
    spoilerSafe: true,
    description:
      'When all background music drops out and only the wooden torii echoes remain—peak antagonist presence without a single wasted line of dialogue.',
  },
  {
    id: 'clip-4',
    title: 'Last Train Across Sakura Crossing — Color Script & Lighting Study',
    animeTitle: 'Echoes After April',
    episodeTag: 'OVA · EP 04',
    category: 'Visual Aesthetics',
    authorName: 'Haruka Sato',
    authorHandle: '@haruka_mecha',
    authorAvatar: '/images/avatar-haruka.jpg',
    image: '/images/clip-cyber-shibuya.jpg',
    fpsSpec: '24 FPS · 10-BIT HEVC',
    timestamp: '11:19 — 12:04',
    keyAnimator: 'CoMix Background Direction',
    upvotes: 3290,
    comments: 188,
    spoilerSafe: true,
    description:
      'Every reflection on the asphalt carries both sodium streetlamp warmth and cool neon cyan sky bounce. Pure wallpaper material in every frame.',
  },
];

export const ENEMY_DOSSIERS: EnemyDossier[] = [
  {
    id: 'enemy-1',
    name: 'Obsidian Unit-09 "Calamity"',
    alias: 'The Silent Tidebreaker',
    series: 'Aegis Protocol: Neo-Bay',
    threatTier: 'S+ Cataclysm',
    peakEpisode: 'Act III · 54:10',
    image: '/images/clip-mecha-boss.jpg',
    combatStyle: 'Orbital Lance & Gravity Well Barrier',
    communityWinRate: 94,
    signatureMoment:
      'Parts the cloud deck above Sector 4 single-handedly while shrugging off an entire fleet salvo without breaking stance.',
    sharedClipsCount: '14.2K shared cuts',
    tags: ['Colossal Boss', 'Zero Dialogue Menace', 'Peak Sound Design'],
  },
  {
    id: 'enemy-2',
    name: 'Kagura of the Hollow Shrine',
    alias: 'Eighth Spirit Sovereign',
    series: 'Shrine of Hollow Embers',
    threatTier: 'SS Sovereign',
    peakEpisode: 'Season 1 · EP 12',
    image: '/images/clip-spirit-shrine.jpg',
    combatStyle: 'Azure Flame Sealing & Reversed Causality',
    communityWinRate: 91,
    signatureMoment:
      'Walks calmly down 108 vermilion torii steps as the protagonists’ strongest barrier shatters in reverse order.',
    sharedClipsCount: '19.8K shared cuts',
    tags: ['Philosophical Antagonist', 'Domain Master', 'Fan Favorite Villain'],
  },
  {
    id: 'enemy-3',
    name: 'Rei "Crimson Fang" Kurosawa',
    alias: 'The Mirror Rival',
    series: 'Blade of the Vermilion Horizon',
    threatTier: 'S Mythic Rival',
    peakEpisode: 'Season 2 · EP 23',
    image: '/images/showcase-hero-sakuga.jpg',
    combatStyle: 'High-Speed Iaijutsu Counter- cuts',
    communityWinRate: 88,
    signatureMoment:
      'Matches the protagonist step-for-step across rain-slick glass at 24 frames on-ones, forcing an ideological stalemate.',
    sharedClipsCount: '26.4K shared cuts',
    tags: ['Iconic Rival', 'Hand-to-Hand Sakuga', 'Character Foil'],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Social video players turn dark anime fights and rain particles into muddy blocks. On AnimeFang, every single 24fps impact frame stays razor-sharp, and fans actually discuss animation craft instead of farming bait.',
    author: 'Kenji Takahashi',
    role: 'Sakuga Historian & AMV Editor · 64K Followers',
    avatar: '/images/avatar-kenji.jpg',
    metric: '1.8M clip views this season',
  },
  {
    quote:
      'The Enemy Codex and automatic episode spoiler shields changed how our 4,200-member guild runs seasonal watch parties. Nobody gets spoiled if they watch three hours late, and boss rankings are electric.',
    author: 'Haruka Sato',
    role: 'Founder, Shibuya Night Watch Guild',
    avatar: '/images/avatar-haruka.jpg',
    metric: '4,200 active weekly members',
  },
  {
    quote:
      'Being able to scrub frame-by-frame, tag the key animator, compare the manga panel side-by-side, and drop a clean embed into Discord takes ten seconds. It feels built by people who genuinely love anime.',
    author: 'Ren Kobayashi',
    role: 'Indie Animator & Community Moderator',
    avatar: '/images/avatar-ren.jpg',
    metric: '420+ frame breakdowns shared',
  },
];

export const PRICING_TIERS = [
  {
    id: 'fan',
    name: 'Community Fan',
    tagline: 'Everything you need to follow seasonal drops, vote on showdowns, and stay spoiler-free.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    highlighted: false,
    ctaText: 'Join Free Forever',
    features: [
      'Unlimited HD browsing across all clips & threads',
      'Automatic per-episode Spoiler Shield protection',
      'Vote & rank in the Seasonal Enemy & Rival Codex',
      'Upload up to 15 clips/month (1080p crisp encode)',
      'Live Simulcast Watch Lounge access & stamps',
    ],
  },
  {
    id: 'senpai',
    name: 'Senpai Pro',
    tagline: 'Built for clippers, AMV editors, sakuga collectors, and power fans.',
    monthlyPrice: 8,
    yearlyPrice: 6,
    highlighted: true,
    badge: 'Most Popular',
    ctaText: 'Start 14-Day Free Trial',
    features: [
      'Unlimited 4K HDR & lossless 60fps/24fps clip uploads',
      'Frame-by-frame draw & key-animator annotation studio',
      'Side-by-side Manga vs. Anime comparison composer',
      'Private HD Watch Rooms for up to 50 friends',
      'Custom animated profile banner & verified guild flair',
      'Zero-watermark instant embeds for Discord & X',
    ],
  },
  {
    id: 'guild',
    name: 'Guild Hub',
    tagline: 'For anime clubs, subbing collectives, creators, and thriving community servers.',
    monthlyPrice: 24,
    yearlyPrice: 19,
    highlighted: false,
    ctaText: 'Launch Your Guild',
    features: [
      'Dedicated branded community space up to 10,000 fans',
      'Automated airing calendar & Discord webhook sync',
      'Custom tournament brackets for Best Villain / Best Fight',
      'Shared creator vault with role-based mod tools',
      'Community analytics & trending clip digests',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Why do anime clips look noticeably cleaner on AnimeFang than on standard social feeds?',
    answer:
      'Most social platforms aggressively re-compress uploads using low-bitrate presets tuned for talking-head phone videos, which destroys dark cel shading, rain streaks, and fast sakuga impact frames. Our pipeline preserves native 24fps cadence, crisp line edges, and 10-bit shadow gradients with zero muddy macroblocking.',
  },
  {
    question: 'What is the Enemy & Rival Codex, and how can fans contribute?',
    answer:
      'Anime lives and breathes through unforgettable antagonists, final bosses, and ideological rivals. Every series hub includes a community-curated Enemy & Rival Codex where members share signature entrance cuts, debate power-scaling tiers, compare manga vs. anime adaptations, and vote in seasonal showdown brackets.',
  },
  {
    question: 'How does automatic Spoiler Shield protection keep late watchers safe?',
    answer:
      'You tell AnimeFang which episode you have reached for any airing or classic series (or sync your watchlist in one click). Any clip, Enemy Codex entry, or comment tagged beyond your current episode is automatically frosted with a clean one-click blur shield until you mark that episode watched.',
  },
  {
    question: 'Can I embed my shared clips and frame breakdowns into Discord, Reddit, or X?',
    answer:
      'Yes! Every clip and side-by-side manga comparison generates an instant, ultra-fast OpenGraph player embed with clean frame previews, episode tags, and automatic spoiler respect when shared in Discord servers or group chats.',
  },
  {
    question: 'Is AnimeFang really free to join for regular anime fans?',
    answer:
      '100% free forever. You never hit paywalls to watch community clips, join live episode watch threads, use Spoiler Shields, or vote in community rankings. Senpai Pro and Guild Hub simply unlock 4K lossless creator storage, frame-annotation tools, and large private rooms.',
  },
];
