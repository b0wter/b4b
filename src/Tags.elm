module Tags exposing (..)


type alias Boost =
    { trigger : Trigger
    , effects : List Effect
    }



{-
   type alias Effect =
       { change : Change
       , duration : Duration
       , stat : Stat
       }
-}


type alias TriggerEffects =
    { trigger : Trigger
    , effects : List Effect
    }


-- Passive is basically the minimal
type Effect
    = Once Stat Change
    | Passive Stat Change -- Passive is a special case for convenience
    | Timed Duration Effect
    | Delayed Int Effect
    | OverTime Int Effect
    | Triggered Trigger Effect
    | Twin Effect Effect
    | Special String -- Used for cases that cannot be expressed otherwise


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
    | DamageResistance


type Change
    = AbsoluteMax Int       -- increases the stat's max value by a fixed amount
    | AbsoluteCurrent Int   -- increases the stat's current value by a fixed amount
    | RelativeMax Int       -- increases the stat's max value by a relative amount
    | RelativeCurrent Int   -- increases the stat's current value by a fixed amount
    | Disable


type Duration
    = Infinite
    | ForSeconds Int
    | AfterSeconds Int


type Trigger
    = Always -- This is always active.
    | KillEnemy



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
