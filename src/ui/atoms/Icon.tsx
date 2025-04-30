/* import React from 'react';

import AlertUserIcon from '@/assets/icons/alert-user.svg?react';
import BoatIcon from '@/assets/icons/boat.svg?react';
import BoxIcon from '@/assets/icons/box.svg?react';
import BoxesTruckIcon from '@/assets/icons/boxes-truck.svg?react';
import BusinessClimbIcon from '@/assets/icons/business-climb-top.svg?react';
import BusinessContractApproveIcon from '@/assets/icons/business-contract-approve.svg?react';
import BusinessDealHandshakeIcon from '@/assets/icons/business-deal-handshake-circle.svg?react';
import CashShieldIcon from '@/assets/icons/cash-shield.svg?react';
import FaceIdIcon from '@/assets/icons/face-id.svg?react';
import FireIcon from '@/assets/icons/fire.svg?react';
import FlashIcon from '@/assets/icons/flash?react.svg';
// import FlashIcon from '@/assets/icons/flash.svg';
import HeadphonesCustomerIcon from '@/assets/icons/headphones-customer-support.svg?react';
import LoginKeysIcon from '@/assets/icons/login-keys.svg?react';
import MessagesPeopleBubbleIcon from '@/assets/icons/messages-people-bubble.svg?react';
import PlaneIcon from '@/assets/icons/plane.svg?react';
import ShieldStarIcon from '@/assets/icons/shield-star.svg?react';
import ShieldIcon from '@/assets/icons/shield.svg?react';
import SmileyHappyIcon from '@/assets/icons/smiley-happy.svg?react';
import TargetCenterIcon from '@/assets/icons/target-center.svg?react';
import TwistIcon from '@/assets/icons/twist.svg?react';
import TruckIcon from '@/assets/icons/truck.svg?react';

const iconMap = {
  flash: FlashIcon,
  alertuser: AlertUserIcon,
  boat: BoatIcon,
  box: BoxIcon,
  boxestruck: BoxesTruckIcon,
  businessclimb: BusinessClimbIcon,
  businesscontract: BusinessContractApproveIcon,
  businessdeal: BusinessDealHandshakeIcon,
  cashshield: CashShieldIcon,
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

export type IconName = keyof typeof iconMap;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 72, className, ...props }: IconProps) {
  const SvgIcon = iconMap[name];
  return (
    <SvgIcon
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
}
 */
