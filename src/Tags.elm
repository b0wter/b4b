module Tags exposing (..)


type Effect
    = Once Stat Change
    | Passive Stat Change -- Passive is a special case for convenience
    | Timed Duration Effect
    | Delayed Duration Effect
    | OverTime Int Effect
    | Triggered Trigger Effect
    | While PlayerState Effect
    | Twin Effect Effect
    | Special String -- Used for cases that cannot be expressed otherwise
    | Team Effect
    | Disables DisableAbleStats
    | Many (List Effect)
    | RelativeChance Int Effect
    | InDistance Int Effect


{-| Checks whether the given effect is `Passive` or
is of type `Twin`, `Team` or `Many` and includes a `Passive` as any
of its first child elements.
-}
getFirstLevelPassiveEffect : Effect -> List (Stat, Change)
getFirstLevelPassiveEffect effect =
    case effect of
        Passive s c -> 
            [ (s, c) ]
        Team t ->
            t |> getFirstLevelPassiveEffect
        Twin a b ->
            List.append (getFirstLevelPassiveEffect a) (getFirstLevelPassiveEffect b)
        Many m ->
            m |> List.map getFirstLevelPassiveEffect |> List.concat
        _ -> 
            []
            

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
    | MoveSpeed
    | Damage
    | MeleeDamageAgainstMutation
    | DamageResistance
    | BulletDamage
    | BulletPenetration
    | AmmoCapacity
    | AimSpeed
    | AimingDownSightsMoveSpeed
    | OffensiveAccessoryCount
    | DefensiveAccessoryCount
    | MedicalAccessoryCount
    | SupportAccessoryCount
    | AccessoryDamage
    | ReloadSpeed
    | SwapSpeed
    | Copper
    | TemporaryHealth
    | ExplosiveDamage
    | ExplosiveResistance
    | FireDamage
    | Lifes
    | WeakspotDamage
    | BulletStumble
    | MeleeStumble
    | EffectiveRange
    | TraumaDamage
    | TraumaResistance
    | AmmoRefill
    | FireResistance
    | AcidResistance


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
    --| AfterSeconds Int


type Trigger
    = Always -- This is always active.
    | OnKill EnemyTargetType
    | OnIncapacitated FriendlyTargetType
    | OnWeaponChanged
    | OnLootCopper
    | OnMeleeKill
    | OnTakingPainMeds
    | OnDealingDamageTo EnemyTargetType
    | OnDealingMeleeDamageTo EnemyTargetType
    | OnPrecisionKill


type EnemyTargetType
    = AnyEnemy
    | Ridden
    | Mutation


type FriendlyTargetType
    = Self
    | Teammate
    | SelfOrTeammate


type PlayerState
    = PlayerAimingDownSights
    | PlayerCrouching
    | PlayerUsingMeleeWeapon
    | PlayerUsingSniper
    | PlayerUsingLmg
    | PlayerUsingRifle
    | PlayerUsingSmg
    | PlayerUsingPistol
    | PlayerUsingShotgun
    | PlayerUsingMedicalAccessory
    | PlayerAttacking

statToString : Stat -> String
statToString stat =
    case stat of
    Stamina -> "stamina"
    StaminaRegeneration -> "stamina regeneration"
    StaminaEfficiency -> "stamina efficiency"
    Health -> "health"
    Attack -> "attack"
    MeleeDamage -> "melee damage"
    MeleeStaminaEfficiency -> "melee stamina efficiency"
    MeleeAttackSpeed -> "melee attack speed"
    WeaponSwapSpeed -> "weapon swap speed"
    Accuracy -> "accuracy"
    Healing -> "healing"
    MoveSpeed -> "move speed"
    Damage -> "damage"
    MeleeDamageAgainstMutation -> "melee damage against mutation"
    DamageResistance -> "damage resistance"
    BulletDamage -> "bullet damage"
    BulletPenetration -> "bullet penetration"
    AmmoCapacity -> "ammo capacity"
    AimSpeed -> "aim speed"
    AimingDownSightsMoveSpeed -> "ads move speed"
    OffensiveAccessoryCount -> "offensive accessory count"
    DefensiveAccessoryCount -> "defensive accessory count"
    MedicalAccessoryCount -> "medial accessory count"
    SupportAccessoryCount -> "support accessory count"
    AccessoryDamage -> "accessory damage"
    ReloadSpeed -> "reload speed"
    SwapSpeed -> "swap speed"
    Copper -> "copper"
    TemporaryHealth -> "temporary health"
    ExplosiveDamage -> "explosive damage"
    ExplosiveResistance -> "explosive resistance"
    FireDamage -> "fire damage"
    Lifes -> "lifes"
    WeakspotDamage -> "weakspot damage"
    BulletStumble -> "bullet stumble damage"
    MeleeStumble -> "melee stumble damage"
    EffectiveRange -> "effective range"
    TraumaDamage -> "trauma damage"
    TraumaResistance -> "trauma resistance"
    AmmoRefill -> "ammo refill"
    FireResistance -> "fire resistance"
    AcidResistance -> "acid resistance"
    
        
changeToString : Change -> String
changeToString change =
    let 
        formatSignI c = if c > 0 then "+" ++ (c |> String.fromInt) else  (c |> String.fromInt)
        formatSignF c = if c > 0 then "+" ++ (c |> String.fromFloat) else  (c |> String.fromFloat)
    in
    case change of
        AbsoluteCurrent c -> formatSignI c
        AbsoluteMax c -> formatSignI c
        RelativeMax c -> (formatSignF c) ++ "%"
        RelativeCurrent c -> (formatSignI c) ++ "%"
        Disable -> "DISABLES"
            
            
durationToString : Duration -> String
durationToString duration =
    case duration of
        Infinite -> "for the rest of the round"
        ForSeconds s -> "for " ++ (s |> String.fromInt) ++ " seconds"

enemyTargetTypeToString : EnemyTargetType -> String 
enemyTargetTypeToString enemy =
    case enemy of
        AnyEnemy -> "enemy"       
        Ridden -> "Ridden"
        Mutation -> "Mutation"
            
friendlyTargetTypeToString : FriendlyTargetType -> String
friendlyTargetTypeToString friendly =
    case friendly of
        Self -> "you"     
        Teammate -> "a teammate"
        SelfOrTeammate -> "you or a teammate"
            
            
triggerToString : Trigger -> String
triggerToString trigger =
    case trigger of
        Always ->
            "always"

        OnKill AnyEnemy ->
            "when you kill an enemy"
            
        OnKill e ->
            "you kill a " ++ (e |> enemyTargetTypeToString)
            

        OnIncapacitated Self ->
            "you become incapacitated your teammates gain"
            
        OnIncapacitated o ->
            (o |> friendlyTargetTypeToString) ++ " becomes incapacitated you and your remaining teammates gain"
            

        OnWeaponChanged ->
            "stow/change our weapon"

        OnLootCopper ->
            "loot copper"
            

        OnMeleeKill ->
            "melee kills"
            

        OnTakingPainMeds ->
            "Pain meds you apply also grant"
            

        OnDealingDamageTo AnyEnemy ->
            "dealing damage to an enemy"
                
        OnDealingDamageTo enemyTargetType ->
            "dealing damage to a " ++ (enemyTargetType |> enemyTargetTypeToString)

        OnDealingMeleeDamageTo AnyEnemy ->
            "dealing melee damage to an enemy"
                
        OnDealingMeleeDamageTo enemyTargetType ->
            "dealing melee damage to a " ++ (enemyTargetType |> enemyTargetTypeToString)
            

        OnPrecisionKill ->
            "precision kills"
            
        
playerStateToString : PlayerState -> String
playerStateToString state =
    case state of
        PlayerAimingDownSights ->
            "aiming down sights"     

        PlayerCrouching ->
            "crouching"
            

        PlayerUsingMeleeWeapon ->
            "using a melee weapon "
            

        PlayerUsingSniper ->
            "using a sniper rifle"
            

        PlayerUsingLmg ->
            "using a LMG"
            

        PlayerUsingRifle ->
            "using an assault rifle"
            

        PlayerUsingSmg ->
            "using an smg"
            

        PlayerUsingPistol ->
            "using a pistol"
            

        PlayerUsingShotgun ->
            "using a shotgun"
            
            
        PlayerUsingMedicalAccessory ->
            "using a medical accessory"
            
            
        PlayerAttacking ->
            "while shooting or melee attacking"
            
        

effectToString : Effect -> String
effectToString ef =
    case ef of
        Passive stat change ->
            (change |> changeToString) ++ " " ++ (stat |> statToString)

        Once stat change ->
            (change |> changeToString) ++ " " ++ (stat |> statToString)
            
        Timed duration effect ->
            let 
                d = case duration of
                        Infinite -> "for the rest of the round"
                        ForSeconds s -> "for " ++ (s |> String.fromInt) ++ " seconds" 
            in
            (effect |> effectToString) ++ " " ++ d

        Delayed duration effect ->
            let 
                d = case duration of
                        Infinite -> "at the end of the round"
                        ForSeconds s -> "after " ++ (s |> String.fromInt) ++ " seconds" 
            in
            d ++ " " ++ (effect |> effectToString)
            

        OverTime int effect ->
            (effect |> effectToString) ++ " over " ++ (int |> String.fromInt) ++ " seconds"
            

        Triggered trigger effect ->
            "when " ++ (trigger |> triggerToString) ++ " " ++ (effect |> effectToString)

        While playerState effect ->
           "While " ++ (playerState |> playerStateToString) ++ " gain " ++ (effect |> effectToString) 
            

        Twin effect1 effect2 ->
            (effect1 |> effectToString) ++ ", " ++ (effect2 |> effectToString)

        Special string ->
            string
            

        Team effect ->
            "TEAM EFFECT: " ++ (effect |> effectToString)
            

        Disables stat ->
            let
                s = case stat of
                        AimingDownSights -> "ads"
                        Sprinting -> "sprinting"
                        SupportAccessory -> "support accessory"
                        OffensiveAccessory -> "offensive accessory"
                        DealingFriendlyFire -> "dealing friendly fire"
                        TakingFriendlyFire -> "taking friendly fire"
            in
            "DISABLES: " ++ s
            

        Many effects ->
            effects 
            |> List.map effectToString
            |> String.join ", "
            

        RelativeChance int effect ->
            "have a " ++ (int |> String.fromInt) ++ "% chance to " ++ (effect |> effectToString)
            

        InDistance int effect ->
            "within " ++ (int |> String.fromInt) ++ " meters " ++ (effect |> effectToString)

    
            