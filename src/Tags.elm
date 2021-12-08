module Tags exposing (..)


-- Passive is basically the minimal
type Effect
    = Once Stat Change
    | Passive Stat Change -- Passive is a special case for convenience
    | Timed Duration Effect
    | Delayed Int Effect
    | OverTime Int Effect
    | Triggered Trigger Effect
    | While PlayerState Effect
    | Twin Effect Effect
    | Special String -- Used for cases that cannot be expressed otherwise
    | Team Effect
    | Disables DisableAbleStats
    | Many (List Effect)


type Stat
    = Stamina
    | StaminaRegeneration
    | StaminaEfficiency
    | Health
    | Attack
    | MeleeDamage
    | MeleeStaminaEfficiency
    | MeleeAttackSpeed
    | WeaponSwapSpeed
    | Accuracy
    | Healing
    | Movement
    | Sprinting
    | Damage
    | DamageResistance
    | BulletDamage
    | BulletPenetration
    | AmmoCapacity
    | AimSpeed
    | OffensiveAccessoryCount
    | DefensiveAccessoryCount
    | MedicalAccessoryCount
    | SupportAccessoryCount
    | AccessoryDamage
    | ReloadSpeed
    | SwapSpeed


type DisableAbleStats
    = AimingDownSights
    | Sprinting
    | SupportAccessory
    | OffensiveAccessory
    | DealingFriendlyFire
    | TakingFriendlyFire

type Change
    = AbsoluteMax Int       -- increases the stat's max value by a fixed amount
    | AbsoluteCurrent Int   -- increases the stat's current value by a fixed amount
    | RelativeMax Float       -- increases the stat's max value by a relative amount
    | RelativeCurrent Int   -- increases the stat's current value by a fixed amount
    | Disable


type Duration
    = Infinite
    | ForSeconds Int
    | AfterSeconds Int


type Trigger
    = Always -- This is always active.
    | OnEnemyKilled
    | OnTeammateIncapacitated
    | OnSelfIncapacitated
    | OnTeammateOrSelfIncapacitated

type PlayerState
    = PlayerAimingDownSights
    | PlayerCrouching

{-
   type Tag
       = Stamina
       | StaminaRegeneration
       | StaminaEfficiency
       | Melee
       | Attack
       | AttackSpeed
       | DamageResistance
       | Cooldown
       | SwapSpeed
       | Accuracy
       | Healing
       | UseSpeed
       | Movement
       | Health
       | Damage
-}
