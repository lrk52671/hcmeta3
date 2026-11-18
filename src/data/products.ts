export interface VcselProduct {
  id: string;
  name: string;
  type: string;
  image: string;
  features: string[];
}

export interface VcselParameter {
  name: string;
  values: Record<string, string>;
}

export interface CameraSubProduct {
  name: string;
  description: string;
}

export interface CameraSeries {
  id: string;
  name: string;
  image: string;
  subProducts: CameraSubProduct[];
}

export interface CameraSpec {
  name: string;
  value: string;
}

import vcselPam4 from '@/assets/106G PAM4 VCSEL.png';
import vcselHcg from '@/assets/106G HCG VCSEL.png';
import mHawkImg from '@/assets/mHawk Series.png';
import iHawkImg from '@/assets/iHawk Series.png';

export const vcselProducts: VcselProduct[] = [
  {
    id: 'vcsel-106-pam4',
    name: '106 Gbps PAM4 VCSEL',
    type: '850 nm multimode',
    image: vcselPam4,
    features: [
      'Single-channel data rate up to 106 Gbps',
      '6-inch wafer process',
      'GR 468 reliability standard',
      'IEEE 802.3db compliant',
      'Applications: AI computing, cloud data centers',
    ],
  },
  {
    id: 'vcsel-106-hcg',
    name: '106 Gbps HCG Few-Mode VCSEL',
    type: '850 nm single-mode',
    image: vcselHcg,
    features: [
      'Suppression ratio approaching single-mode 15 dB',
      'Ultra-narrow spectral width: 0.12 nm RMS',
      'OM3 fiber long-reach up to 300m',
      'GR 468 and IEEE 802.3db compliant',
    ],
  },
];

export const uvcselParameters: VcselParameter[] = [
  {
    name: 'Operating Temperature',
    values: {
      '56G NRZ': '0~95°C',
      '64G NRZ': '0~70°C',
    },
  },
  {
    name: 'Modulation Bandwidth',
    values: {
      '56G NRZ': '25 GHz',
      '64G NRZ': '38 GHz',
    },
  },
  {
    name: 'Transmission Distance',
    values: {
      '56G NRZ': '100m',
      '64G NRZ': '100m',
    },
  },
  {
    name: 'Lifetime',
    values: {
      '56G NRZ': '>10 years',
      '64G NRZ': '>10 years',
    },
  },
];

export const uvcselArraySizes = ['19', '37', '61', '97'];

export const cameraSeries: CameraSeries[] = [
  {
    id: 'mhawk',
    name: 'mHawk Series',
    image: mHawkImg,
    subProducts: [
      { name: 'mHawk P100R', description: 'Polarization extinction ratio 1000:1' },
      { name: 'mHawk 100R', description: 'Type-C USB interface' },
      { name: 'mHawk 100E', description: 'Ethernet, IP67 rated' },
      { name: 'mHawk 070', description: 'Blind spot only 0.1m' },
    ],
  },
  {
    id: 'ihawk',
    name: 'iHawk Series',
    image: iHawkImg,
    subProducts: [
      { name: 'iHawk P100Q', description: 'High precision measurement' },
      { name: 'iHawk 100Q', description: 'Micro USB interface' },
      { name: 'iHawk P150E', description: 'M12 connector, OTA support' },
    ],
  },
];

export const cameraSpecs: CameraSpec[] = [
  { name: 'Size', value: '90 x 25 x 25 mm' },
  { name: 'System', value: 'Windows / Android / Linux' },
  { name: 'Resolution', value: '1280 x 800 @7fps / 640 x 400 @30fps' },
  { name: 'Accuracy', value: '1 mm @60cm' },
  { name: 'Range', value: '0.3 ~ 8.0 m' },
  { name: 'Laser', value: '940 nm Class 1' },
  { name: 'Power', value: '<2.2 W' },
  { name: 'Interface', value: 'USB 2.0 Type C' },
];

export interface ServiceStep {
  id: string;
  title: string;
  color: string;
  icon: string;
  description: string;
  features: string[];
}

export const fabricationServices: ServiceStep[] = [
  {
    id: 'design',
    title: 'Design',
    color: 'bg-blue-600',
    icon: '🎯',
    description: 'Semiconductor photonics design expertise',
    features: [
      'Design knowhow for semiconductor photonics',
      'Advanced epitaxy and process design',
    ],
  },
  {
    id: 'epitaxy',
    title: 'Epitaxy',
    color: 'bg-teal-500',
    icon: '💎',
    description: 'GaAs epitaxy growth capabilities',
    features: [
      'Experience in 6" GaAs epitaxy growth',
      'Rapid product development and technological iteration',
    ],
  },
  {
    id: 'process',
    title: 'Process',
    color: 'bg-green-500',
    icon: '⚙️',
    description: 'Advanced wafer processing',
    features: [
      'Experienced processing capability',
      'Rapid product development and technological iteration',
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    color: 'bg-orange-500',
    icon: '🔬',
    description: 'Comprehensive testing solutions',
    features: [
      'Wafer-scale testing integration and automation',
      'Chip packaging and testing capabilities',
    ],
  },
  {
    id: 'module',
    title: 'Module',
    color: 'bg-pink-500',
    icon: '📦',
    description: 'High-speed optical module design',
    features: [
      'Capability for high-speed optical module design',
      'Excellent optical system and 3D vision camera design',
    ],
  },
];

export interface TestingPlatform {
  name: string;
  description: string;
  features: string[];
  applications: string[];
}

export const rfTestingPlatform: TestingPlatform = {
  name: 'VCSEL and Si-Photonics RF Testing Platform',
  description: 'System integration solution for high-speed optical component testing',
  features: [
    'Wafer level fiber-coupled capability: up to 8 inch wafers',
    'High throughput: 10-40 sec per laser chip',
    'High speed testing: up to 106 Gbps PAM4',
    'Temperature range: -40°C ~ 125°C',
    'Excellent thermal stability and uniformity',
    'Automated fiber coupling: vertical or horizontal',
  ],
  applications: [
    'VCSEL/EML/EEL/DFB RF test',
    'Silicon e/photonics/DFB RF test',
    'Silicon photonics test',
  ],
};