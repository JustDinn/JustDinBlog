import { CONFIG } from "site.config"
import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const isSafariBrowser = (): boolean => {
  if (typeof window === "undefined") return false
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

const MobileProfileCard: React.FC<Props> = () => {
  const [isSafari, setIsSafari] = useState<boolean | null>(null)

  useEffect(() => {
    setIsSafari(isSafariBrowser())
  }, [])

  if (isSafari === null) return null

  return (
    <StyledWrapper>
      <div className="top">💻 Profile</div>
      <div className="mid">
        <div className="wrapper">
          <img
            src={isSafari ? "/avatar.png" : CONFIG.profile.image}
            alt="profile_image"
            width={90}
            height={90}
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="mid">{CONFIG.profile.role}</div>
            <div className="btm">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        height: fit-content;
        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-style: italic;
          font-weight: 700;
        }
        > .mid {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`
