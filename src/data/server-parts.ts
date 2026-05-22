export type ServerPart = {
  id: string;
  name: string;
  description: string;
  /** Placeholder tint until real part photos are added */
  imageColor: string;
  pinNumber: number;
  pinColor: string;
  /** Anchor point on the left panel for the connector line (percent) */
  anchor: { x: number; y: number };
  /** Position in the 3D scene */
  position: [number, number, number];
  size: [number, number, number];
};

export const serverParts: ServerPart[] = [
  {
    id: "gpu",
    name: "GPU Array",
    description:
      "High-performance accelerators for AI training and inference. Swap or scale GPU modules to match your workload.",
    imageColor: "#6366F1",
    pinNumber: 1,
    pinColor: "#EC4899",
    anchor: { x: 72, y: 28 },
    position: [0, 0.6, 0.55],
    size: [1.4, 0.35, 0.12],
  },
  {
    id: "cpu",
    name: "CPU Module",
    description:
      "Central processing unit that orchestrates workloads across the system. Configurable core count and clock speed.",
    imageColor: "#3B82F6",
    pinNumber: 2,
    pinColor: "#3B82F6",
    anchor: { x: 72, y: 42 },
    position: [0, 0.15, 0.55],
    size: [0.9, 0.25, 0.1],
  },
  {
    id: "memory",
    name: "Memory Banks",
    description:
      "High-bandwidth RAM for fast data access during model training. Expandable DIMM slots for future upgrades.",
    imageColor: "#8B5CF6",
    pinNumber: 3,
    pinColor: "#8B5CF6",
    anchor: { x: 72, y: 55 },
    position: [0, -0.15, 0.55],
    size: [1.2, 0.2, 0.1],
  },
  {
    id: "storage",
    name: "Storage Bay",
    description:
      "NVMe SSD arrays for datasets, checkpoints, and model weights. Hot-swappable drives for easy maintenance.",
    imageColor: "#EC4899",
    pinNumber: 4,
    pinColor: "#EC4899",
    anchor: { x: 72, y: 68 },
    position: [0, -0.45, 0.55],
    size: [1.3, 0.25, 0.1],
  },
  {
    id: "network",
    name: "Network Interface",
    description:
      "Multi-gigabit networking for cluster communication and data transfer. Supports RDMA for low-latency workloads.",
    imageColor: "#14B8A6",
    pinNumber: 5,
    pinColor: "#14B8A6",
    anchor: { x: 72, y: 78 },
    position: [0.55, -0.75, 0.45],
    size: [0.35, 0.2, 0.08],
  },
  {
    id: "psu",
    name: "Power Supply",
    description:
      "Redundant power units keep your server running reliably. Rated for sustained AI workloads at full load.",
    imageColor: "#F59E0B",
    pinNumber: 6,
    pinColor: "#F59E0B",
    anchor: { x: 72, y: 88 },
    position: [-0.55, -0.75, 0.45],
    size: [0.35, 0.2, 0.08],
  },
];

export const defaultPart = serverParts[0];
