import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp phone number
const WHATSAPP_NUMBER = "50670124116";

// Predefined WhatsApp messages by service type
export const whatsappMessages = {
  rehabilitation:
    "Hola, Dra. Pinto. Me gustaría recibir información sobre el programa de rehabilitación cardiopulmonar y cómo puedo iniciar una valoración.",
  cardiometabolic:
    "Hola, Dra. Pinto. Me gustaría agendar una consulta de medicina general con enfoque en prevención del riesgo cardiometabólico.",
  general:
    "Hola, Dra. Pinto. Visité su página web y me gustaría recibir información sobre sus servicios médicos.",
  ecg: "Hola, Dra. Pinto. Me gustaría agendar un electrocardiograma.",
  holter: "Hola, Dra. Pinto. Me gustaría consultar sobre el monitoreo Holter.",
  mapa: "Hola, Dra. Pinto. Me gustaría agendar un estudio MAPA de presión arterial.",
} as const;

export type WhatsAppMessageType = keyof typeof whatsappMessages;

/**
 * Generate a WhatsApp link with a predefined message
 * @param messageType - The type of predefined message to use
 * @returns The complete WhatsApp link with encoded message
 */
export function getWhatsAppLink(messageType: WhatsAppMessageType = "general"): string {
  const message = whatsappMessages[messageType];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp link with a custom message
 * @param customMessage - The custom message to send
 * @returns The complete WhatsApp link with encoded message
 */
export function getWhatsAppLinkCustom(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}
