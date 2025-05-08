import type { SVGProps } from 'react';

// Assets
import AlertUserIcon from '@/assets/icons/alert-user.svg';
import BoatIcon from '@/assets/icons/boat.svg';
import BoxIcon from '@/assets/icons/box.svg';
import BoxesTruckIcon from '@/assets/icons/boxes-truck.svg';
import BusinessClimbIcon from '@/assets/icons/business-climb-top.svg';
import BusinessContractApproveIcon from '@/assets/icons/business-contract-approve.svg';
import BusinessDealHandshakeIcon from '@/assets/icons/business-deal-handshake-circle.svg';
import CashShieldIcon from '@/assets/icons/cash-shield.svg';
import FaceIdIcon from '@/assets/icons/face-id.svg';
import FireIcon from '@/assets/icons/fire.svg';
import FlashIcon from '@/assets/icons/flash.svg';
import HeadphonesCustomerIcon from '@/assets/icons/headphones-customer-support.svg';
import LoginKeysIcon from '@/assets/icons/login-keys.svg';
import MessagesPeopleBubbleIcon from '@/assets/icons/messages-people-bubble.svg';
import PlaneIcon from '@/assets/icons/plane.svg';
import ShieldStarIcon from '@/assets/icons/shield-star.svg';
import ShieldIcon from '@/assets/icons/shield.svg';
import SmileyHappyIcon from '@/assets/icons/smiley-happy.svg';
import TargetCenterIcon from '@/assets/icons/target-center.svg';
import TwistIcon from '@/assets/icons/twist.svg';
import TruckIcon from '@/assets/icons/truck.svg';

const iconMap = {
  alertuser: AlertUserIcon,
  boat: BoatIcon,
  box: BoxIcon,
  boxestruck: BoxesTruckIcon,
  businessclimb: BusinessClimbIcon,
  businesscontract: BusinessContractApproveIcon,
  businessdeal: BusinessDealHandshakeIcon,
  cashshield: CashShieldIcon,
  flash: FlashIcon,
  faceid: FaceIdIcon,
  fire: FireIcon,
  headphone: HeadphonesCustomerIcon,
  keys: LoginKeysIcon,
  messagespeople: MessagesPeopleBubbleIcon,
  plane: PlaneIcon,
  shledstar: ShieldStarIcon,
  shield: ShieldIcon,
  smiley: SmileyHappyIcon,
  targetcenter: TargetCenterIcon,
  twist: TwistIcon,
  truck: TruckIcon,
};

type IconName = keyof typeof iconMap;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 72, ...props }: IconProps) {
  const SvgIcon = iconMap[name];
  return <SvgIcon width={size} height={size} {...props} />;
}
